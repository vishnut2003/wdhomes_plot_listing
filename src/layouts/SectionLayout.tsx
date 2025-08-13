import React from 'react'

const SectionLayout = ({
    children,
    className,
}: Readonly<{
    children: React.ReactNode,
    className?: string,
}>) => {
    return (
        <div
            className={`w-full px-[20px] ${className || ""}`}
        >
            <div
                className='w-full max-w-[1400px] mx-auto'
            >
                {children}
            </div>
        </div>
    )
}

export default SectionLayout