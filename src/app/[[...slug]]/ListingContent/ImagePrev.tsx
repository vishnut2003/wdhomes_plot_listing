'use client';

import { RiLoaderLine } from "@remixicon/react";

const ImagePrev = ({ image }: {
    image: string,
}) => {

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
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        ></div>

    )
}

export default ImagePrev