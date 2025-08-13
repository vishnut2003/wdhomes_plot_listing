import SectionLayout from '@/layouts/SectionLayout'
import { RiAtLine, RiMapPin2Line, RiPhoneLine } from '@remixicon/react'
import React from 'react'

const ListingData = ({
    name,
    address,
    price,
    attributes
}: {
    name: string,
    address: string,
    price: number,
    attributes: {
        label: string,
        value: string,
    }[],
}) => {
    return (
        <SectionLayout
            className='pb-[40px]'
        >
            <div
                className='w-full flex items-stretch'
            >
                <div
                    className='w-full space-y-3 p-[20px]'
                >
                    <h1
                        className='font-bold text-4xl'
                    >{name}</h1>
                    <p
                        className='text-base'
                    >{address}</p>

                    <p
                        className='text-2xl font-semibold'
                    >&#8377; {price}</p>

                    <div
                        className='bg-gray-200 py-3 px-5 rounded-md space-y-[20px]'
                    >
                        <h2
                            className='text-2xl font-semibold'
                        >Features</h2>

                        <div
                            className='flex flex-wrap gap-5'
                        >
                            {
                                attributes.map((attribute, index) => (
                                    <div
                                        key={index}
                                        className='bg-wdhomes-color-primary text-white rounded-md py-3 px-4'
                                    >
                                        <p
                                            className='text-lg font-semibold'
                                        >{attribute.label}</p>
                                        <p>{attribute.value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div
                    className='w-[600px] pl-[30px] border-l-2 border-wdhomes-color-primary space-y-[25px]'
                >
                    <h2
                        className='text-2xl font-semibold'
                    >More Information</h2>

                    <div
                        className='space-y-3'
                    >
                        {
                            [
                                {
                                    icon: RiPhoneLine,
                                    label: "Phone",
                                    value: "(+91) 897 987 9877"
                                },
                                {
                                    icon: RiAtLine,
                                    label: "Email Address",
                                    value: "info@wdhomes.com"
                                },
                                {
                                    icon: RiMapPin2Line,
                                    label: "Address",
                                    value: "314-315, T-1, Assotech Business Cresterra Corporate Park, Sector 135, Noida 201304"
                                },
                            ].map((item, index) => (
                                <div
                                    className='flex items-center gap-4'
                                    key={index}
                                >
                                    <div
                                        className='min-w-[40px] h-[40px] rounded-full bg-wdhomes-color-primary text-white flex items-center justify-center'
                                    >
                                        <item.icon
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <p>{item.label}</p>
                                        <p>{item.value}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default ListingData