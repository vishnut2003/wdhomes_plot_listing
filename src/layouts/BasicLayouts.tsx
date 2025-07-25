import React from 'react'

const BasicLayouts = ({ children }: Readonly<{
    children: React.ReactNode,
}>) => {
    return (
        <div
            className='bg-[#00000008] min-h-screen'
        >

            {/* Page Content START */}

            <div
                className='w-full'
            >
                {children}
            </div>

            {/* Page Content END */}

        </div>
    )
}

export default BasicLayouts