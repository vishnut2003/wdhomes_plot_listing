'use client';

import React, { useEffect, useState } from 'react'
import { fetchWordPressMenu, MappedWordpressManuItem } from '../fetchWordpressMenu'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NavbarMenuSubItems from './SubItems';
import { handleCatchBlock } from '@/functions/common';
import Link from 'next/link';
import { RiArrowDownSLine } from '@remixicon/react';
import { cn } from '@/lib/utils';

const NavbarMenu = () => {

    const [menuItems, setMenuItems] = useState<MappedWordpressManuItem[]>([]);

    useEffect(() => {

        (async () => {
            try {
                const menu = await fetchWordPressMenu({ menuName: "Main-Menu" });
                setMenuItems(menu);
            } catch (err) {
                const message = handleCatchBlock(err);
                console.error(message);
            }
        })()

    }, [])

    return (
        <div
            className='flex items-center gap-[10px]'
        >

            {
                menuItems.map((item, index) => (
                    <DropdownMenu
                        key={index}
                    >
                        <DropdownMenuTrigger
                            asChild
                            className={cn(
                                index !== menuItems.length - 1 &&
                                'relative after:w-[0.5px] after:block after:absolute after:right-[-6px] after:top-1/2 after:h-[20px] after:bg-wdhomes-color-primary after:-translate-1/2'
                            )}
                        >
                            <button
                                className='py-[12px] px-[23px] border-2 border-transparent hover:border-wdhomes-color-primary hover:text-wdhomes-color-primary flex items-center gap-[10px] outline-none cursor-pointer'
                            >
                                {item.title}
                                {
                                    item.children && item.children.length > 0 &&
                                    <RiArrowDownSLine
                                        size={20}
                                    />
                                }
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">

                            {
                                item.children &&
                                item.children.map((item, index) => {

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

                        </DropdownMenuContent>
                    </DropdownMenu>
                ))
            }

        </div>
    )
}

export default NavbarMenu