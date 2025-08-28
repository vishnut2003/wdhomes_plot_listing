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
            className='flex items-center justify-end w-full py-[15px] px-[25px] h-full'
        >

            {
                menuItems.map((item, index) => (
                    <DropdownMenu
                        key={index}
                    >
                        <DropdownMenuTrigger asChild>
                            <button>{item.title}</button>
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