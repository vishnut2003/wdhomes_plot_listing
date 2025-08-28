import React from 'react'
import LayoutHeader from './header'
import LayoutFooter from './footer'

const BasicLayouts = ({ children }: Readonly<{
    children: React.ReactNode,
}>) => {
    return (
        <div
            className='bg-[#00000008] min-h-screen'
        >

            <LayoutHeader/>

            {/* Page Content START */}

            <div
                className='w-full'
            >
                {children}
            </div>

            {/* Page Content END */}

            <LayoutFooter/>

        </div>
    )
}

export default BasicLayouts