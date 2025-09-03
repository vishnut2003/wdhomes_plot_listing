import { RemixiconComponentType, RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiPinterestFill, RiTwitterXFill, RiYoutubeFill } from '@remixicon/react'
import React from 'react'
import SectionLayout from '../SectionLayout'
import Link from 'next/link'

interface FooterWidgetItemInterface {
    title: string,
    links?: {
        label: string,
        url: string,
    }[],
    socialIcons?: {
        icon: RemixiconComponentType,
        url: string,
    }[]
}

const FooterWidgets = () => {

    const footerWidgetItems: FooterWidgetItemInterface[] = [

        {
            title: "Connect with WD",
            socialIcons: [
                {
                    icon: RiInstagramLine,
                    url: "#"
                },
                {
                    icon: RiFacebookCircleFill,
                    url: "#",
                },
                {
                    icon: RiLinkedinBoxFill,
                    url: "#",
                },
                {
                    icon: RiTwitterXFill,
                    url: "#",
                },
                {
                    icon: RiPinterestFill,
                    url: "#",
                },
                {
                    icon: RiYoutubeFill,
                    url: "#",
                },
            ],
        },

        {
            title: "Discover",
            links: [
                {
                    label: "Find A Home",
                    url: "#"
                },
                {
                    label: "Design Studio",
                    url: "#",
                },
                {
                    label: "Resources",
                    url: "#",
                },
                {
                    label: "Financing",
                    url: "#",
                },
            ],
        },

        {
            title: "Company",
            links: [
                {
                    label: "About WD",
                    url: "#",
                },
                {
                    label: "Partners",
                    url: "#",
                },
                {
                    label: "Careers",
                    url: "#",
                }
            ],
        },

        {
            title: "Resources",
            links: [
                {
                    label: "Homebuying help",
                    url: "#",
                },
                {
                    label: "Costs & financing",
                    url: "#",
                },
                {
                    label: "Built for Better Living",
                    url: "#"
                },
            ]
        },

        {
            title: "Useful Links",
            links: [
                {
                    label: "Sales",
                    url: "#",
                },
                {
                    label: "Terms & Conditions",
                    url: "#",
                },
                {
                    label: "Privacy Policy",
                    url: "#",
                }
            ]
        }
    ]

    return (
        <div
            className='bg-white border-t border-wdhomes-color-primary'
        >
            <SectionLayout>
                <div
                    className='w-full flex items-start gap-[20px] py-[40px]'
                >

                    {
                        footerWidgetItems.map((section, index) => (
                            <div
                                key={index}
                                className='space-y-[20px] w-full'
                            >
                                <h2
                                    className='text-xl font-semibold'
                                >{section.title}</h2>
                                <div>
                                    {
                                        section.socialIcons &&
                                        <div
                                            className='w-max grid grid-cols-2 gap-3 justify-between'
                                        >
                                            {
                                                section.socialIcons.map((icon, index) => (
                                                    <Link
                                                        key={index}
                                                        href={icon.url}
                                                        className='flex h-[50px] w-[50px] items-center justify-center rounded-md bg-wdhomes-color-primary text-white'
                                                    >
                                                        <icon.icon
                                                            size={25}
                                                        />
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    }

                                    {
                                        section.links &&
                                        <div
                                            className='space-y-[15px]'
                                        >
                                            {
                                                section.links.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.url}
                                                        className='flex'
                                                    >{item.label}</Link>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            </SectionLayout>
        </div>
    )
}

export default FooterWidgets