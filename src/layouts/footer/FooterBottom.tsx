import React from 'react'
import SectionLayout from '../SectionLayout'
import Link from 'next/link'

const FooterBottom = () => {

    const footerLinks: {
        label: string,
        url: string,
    }[] = [
        {
            label: "Terms & Conditions",
            url: "#",
        },
        {
            label: "Privacy Policy",
            url: "#",
        },
        {
            label: "Ethics",
            url: "#",
        },
        {
            label: "Sitemap",
            url: "#",
        }
    ]

  return (
    <div
        className='bg-wdhomes-color-primary text-white'
    >
        <SectionLayout>
            <div
                className='w-full flex items-center justify-between py-[30px]'
            >
                <div
                    className='flex items-center gap-[15px]'
                >
                    {
                        footerLinks.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className='flex'
                            >{item.label}</Link>
                        ))
                    }
                </div>

                <div>
                    <p>© 2025 WD Home. All rights reserved.</p>
                </div>
            </div>
        </SectionLayout>
    </div>
  )
}

export default FooterBottom