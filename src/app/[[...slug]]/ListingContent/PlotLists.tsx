'use client';

import React, { useState } from 'react'
import { ListingsType } from '@/types/Listing';
import ImagePrev from './ImagePrev';
import Link from 'next/link';

const PlotLists = ({ defaultPlotData }: {
    defaultPlotData: ListingsType[],
}) => {

    const [plotsItems] = useState<ListingsType[]>(defaultPlotData);

    return (
        <div
            className='w-full'
        >
            <div
                className='w-full flex flex-col gap-[20px]'
            >
                {
                    plotsItems.map((plot, index) => (
                        <div
                            key={index}
                            className='border-2 border-foreground/10 bg-background hover:border-wdhomes-color-primary transition-all'
                        >
                            <div
                                className='flex items-start'
                            >
                                <ImagePrev
                                    image={plot.featuredImage}
                                />

                                <div
                                    className='p-4 space-y-2'
                                >
                                    <h3
                                        className='text-2xl font-bold'
                                    >{plot.name}</h3>
                                    <p
                                        className='font-light'
                                    >{plot.location.address}</p>
                                    <p
                                        className='font-light text-lg'
                                    >From <span className='font-semibold'>&#8377;{plot.price}</span></p>
                                    <Link
                                        className='py-2 px-5 rounded-md bg-wdhomes-color-primary block w-max font-semibold text-sm text-white'
                                        href={`/new-homes-${plot.location.city}/${plot.slug}`}
                                    >
                                        Explore
                                    </Link>
                                </div>
                            </div>

                            {/* Home Data */}
                            <div
                                className='w-full flex justify-between border-t border-gray-200'
                            >
                                {
                                    plot.attributes ?
                                        plot.attributes.map((attribute, index) => {

                                            return (
                                                <div
                                                    key={index}
                                                    className={`flex flex-col w-full items-center p-[15px] bg-gray-50 ${index !== 0 ? "border-l border-gray-200" : ""}`}
                                                >
                                                    <p
                                                        className='font-semibold text-lg'
                                                    >{attribute.value}</p>
                                                    <p
                                                        className='font-light text-lg'
                                                    >{attribute.label}</p>
                                                </div>
                                            )
                                        }) :
                                        <p>No data Found</p>
                                }
                            </div>
                        </div>
                    ))
                }

                {
                    plotsItems.length === 0 &&
                    <p>No result found</p>
                }
            </div>
        </div>
    )
}

export default PlotLists