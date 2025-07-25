'use client';

import React, { useState } from 'react'
import { RiArrowDownSLine } from "@remixicon/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ListingsPageHeader = () => {

    const [currentLocation, setCurrentLocation] = useState<string>("Greater Noida");

    const locations = [
        "Noida",
        "Greater Noida",
        "Gurugram",
        "Ghaziabad",
    ]

    return (
        <div
            className='w-full'
        >
            <h2
                className='text-center text-3xl font-light'
            >
                New homes in
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className='ml-[6px] font-bold outline-none inline-flex items-center gap-2 cursor-pointer'
                    >
                        {currentLocation}
                        <RiArrowDownSLine
                            size={30}
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className='w-[300px]'
                    >
                        <DropdownMenuLabel>Select Location</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            locations.map((location, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    onClick={() => {
                                        setCurrentLocation(location);
                                    }}
                                >{location}</DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </h2>
        </div>
    )
}

export default ListingsPageHeader