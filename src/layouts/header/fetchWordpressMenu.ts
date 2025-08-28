import axios from "axios";

export interface MappedWordpressManuItem {
    title: string,
    url?: string,
    children?: MappedWordpressManuItem[],
}

interface WordpressRawJsonMenuItem {
    menu_item_parent: string,
    title: string,
    url: string,
    object_id: string,
}

export async function fetchWordPressMenu({ menuName }: {
    menuName: string,
}) {
    return new Promise<MappedWordpressManuItem[]>(async (resolve, reject) => {
        try {

            const isDevEnvironment = process.env.NEXT_PUBLIC_IS_DEV;
            const WordpressHostName = "https://wdhomes.web-spider-solutions.com"

            let menuEndPoint = "/wp-json/custom/v1/menu/" + menuName;

            if (isDevEnvironment) {
                menuEndPoint = WordpressHostName + menuEndPoint;
            }

            const {
                data: menuPostItems
            } = await axios.get(menuEndPoint) as {
                data: WordpressRawJsonMenuItem[],
            }

            const finalResponse: MappedWordpressManuItem[] =
                generateMenuItemWithChild({ menuItems: menuPostItems })

            return resolve(finalResponse)

        } catch (err) {
            return reject(err);
        }
    })
}

function generateMenuItemWithChild({
    menuItems,
    objectId,
}: {
    menuItems: WordpressRawJsonMenuItem[],
    objectId?: string,
}): MappedWordpressManuItem[] {

    let mappedMenu: MappedWordpressManuItem[]

    if (objectId) {
        mappedMenu =
            menuItems.filter((item) => item.menu_item_parent && item.menu_item_parent === objectId)
                .map((item) => {

                    const children = generateMenuItemWithChild({
                        menuItems,
                        objectId: item.object_id,
                    })

                    return ({
                        title: item.title,
                        url: item.url,
                        children,
                    })
                })
    } else {
        const tempData = menuItems.filter((item) => !item.menu_item_parent || item.menu_item_parent == "0")
        mappedMenu = tempData.map((item) => {
            const subMenuItems = generateMenuItemWithChild({
                menuItems: menuItems,
                objectId: item.object_id,
            });

            return ({
                title: item.title,
                url: item.url,
                children: subMenuItems,
            })
        })
    }

    return mappedMenu;
}