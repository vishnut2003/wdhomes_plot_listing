import React from 'react'
import {
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { MappedWordpressManuItem } from '../fetchWordpressMenu'
import Link from 'next/link'

const NavbarMenuSubItems = ({ menuItem }: {
    menuItem: MappedWordpressManuItem,
}) => {
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>{menuItem.title}</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    {
                        menuItem.children &&
                        menuItem.children.map((item, index) => {
                            if (item.children && item.children.length > 0) {
                                return (
                                    <NavbarMenuSubItems
                                        menuItem={item}
                                        key={index}
                                    />
                                )
                            } else {
                                return (
                                    <DropdownMenuItem
                                        key={index}
                                    >
                                        <Link
                                            href={item.url || "#"}
                                        >
                                            {item.title}
                                        </Link>
                                    </DropdownMenuItem>
                                )
                            }
                        })
                    }
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
    )
}

export default NavbarMenuSubItems