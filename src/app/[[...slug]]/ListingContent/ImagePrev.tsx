'use client';

import { RiLoaderLine } from "@remixicon/react";

const ImagePrev = ({ image }: {
    image: string,
}) => {

    const DASHBOARD_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL;

    if (!DASHBOARD_BASE_URL) {
        throw new Error("NEXT_PUBLIC_DASHBOARD_BASE_URL is required in .env")
    }

    if (!image) {
        return (
            <div
                className='w-[40%] h-[180px] overflow-hidden flex items-center justify-center'
            >
                <RiLoaderLine
                    className="animate-spin"
                    size={20}
                />
            </div>
        )
    }

    return (
        <div
            className='w-[40%] h-[180px] overflow-hidden'
            style={{
                backgroundImage: `url(${DASHBOARD_BASE_URL}${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        ></div>

    )
}

export default ImagePrev