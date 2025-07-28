'use client';

import React, { useState } from 'react'
import { PlotItemData } from '.';

const PlotLists = ({ defaultPlotData }: {
    defaultPlotData: PlotItemData[],
}) => {

    const SITE_BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL;

    const [plotsItems] = useState<PlotItemData[]>(defaultPlotData);

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
                                <div
                                    className='w-[40%] h-[180px] overflow-hidden'
                                    style={{
                                        backgroundImage: `url(${SITE_BASE_PATH}${plot.image})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}
                                ></div>

                                <div
                                    className='p-4 space-y-2'
                                >
                                    <h3
                                        className='text-2xl font-bold'
                                    >{plot.name}</h3>
                                    <p
                                        className='font-light'
                                    >{plot.location.city}, {plot.location.state}, {plot.location.zipCode}</p>
                                    <p
                                        className='font-light text-lg'
                                    >From <span className='font-semibold'>&#8377;{plot.startPrice}</span></p>
                                </div>
                            </div>

                            {/* Home Data */}
                            <div
                                className='w-full flex justify-between border-t border-gray-200'
                            >
                                {
                                    plot.homeData ?
                                        Object.entries(plot.homeData).map(([key, value], index) => {

                                            return (
                                                <div
                                                    key={index}
                                                    className={`flex flex-col w-full items-center p-[15px] bg-gray-50 ${index !== 0 ? "border-l border-gray-200" : ""}`}
                                                >
                                                    <p
                                                        className='font-semibold text-lg'
                                                    >{value}</p>
                                                    <p
                                                        className='font-light text-lg'
                                                    >{key}</p>
                                                </div>
                                            )
                                        }) :
                                        <p>No data Found</p>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PlotLists