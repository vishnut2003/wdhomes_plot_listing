import SectionLayout from '@/layouts/SectionLayout';
import Image from 'next/image'
import React from 'react'

const ImagesSection = ({
    featured,
    gallery,
}: {
    featured: string,
    gallery: string[],
}) => {

    const DASHBOARD_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_BASE_URL;

    if (!DASHBOARD_BASE_URL) {
        throw new Error("NEXT_PUBLIC_DASHBOARD_BASE_URL not specified in .env");
    }

    return (
        <SectionLayout
            className='py-[40px]'
        >
            <div
                className='flex items-stretch gap-[20px]'
            >
                <div
                    className='w-full h-[500px] bg-no-repeat bg-cover rounded-md'
                    style={{
                        backgroundImage: `url(${DASHBOARD_BASE_URL}${featured})`,
                    }}
                ></div>

                <div
                    className='w-[50%] flex flex-col gap-[20px]'
                >
                    {
                        gallery.map((image, index) => {
                            if (index <= 1) {
                                return (
                                    <div
                                        key={index}
                                        className='w-full h-full bg-no-repeat bg-cover rounded-md'
                                        style={{
                                            backgroundImage: `url(${DASHBOARD_BASE_URL}${image})`,
                                        }}
                                    ></div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </SectionLayout>
    )
}

export default ImagesSection