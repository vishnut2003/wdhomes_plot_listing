
export interface ListingsType {
    name: string,
    slug: string,
    userId: string,
    featuredImage: string,
    galleryImages: string[],
    price: number,
    description: string,
    location: {
        state: string,
        city: string,
        address: string,
        pinpoint: {
            lat: number,
            lng: number,
        },
    },
    attributes: {
        label: string,
        value: string,
    }[],
}