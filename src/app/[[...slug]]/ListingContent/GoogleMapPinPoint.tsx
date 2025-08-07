'use client';

import { OverlayView } from '@react-google-maps/api'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RiCircleFill } from '@remixicon/react'
import { Button } from '@/components/ui/button';
import { ListingsType } from '@/types/Listing';

const GoogleMapPinPoint = ({ plotData }: {
    plotData: ListingsType,
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const SITE_BASE_PATH = process.env.NEXT_PUBLIC_BASE_URL || "";

    return (
        <OverlayView
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            position={{
                lat: plotData.location.pinpoint.lat,
                lng: plotData.location.pinpoint.lng,
            }}
        >

            <Popover
                open={isOpen}
            >
                <PopoverTrigger
                    className="bg-white p-[2px] rounded-full cursor-pointer"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <RiCircleFill
                        size={15}
                        className="text-wdhomes-color-primary"
                    />
                </PopoverTrigger>
                <PopoverContent
                    className='space-y-[5px]'
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div
                        className='w-full h-[150px] rounded-md'
                        style={{
                            backgroundImage: `url(${SITE_BASE_PATH})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <h3
                        className='text-lg font-semibold'
                    >{plotData.name}</h3>
                    <p>{plotData.location.address}</p>
                    <p>From <b>&#8377;{plotData.price}</b></p>
                    
                    <Button
                        variant={'basicThemeStyle'}
                        className='w-full'
                    >
                        Explore
                    </Button>
                </PopoverContent>
            </Popover>

        </OverlayView>
    )
}

export default GoogleMapPinPoint