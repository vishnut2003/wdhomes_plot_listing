import React from 'react'

const SectionLayout = ({
    children,
    classNames,
}: Readonly<{
    children: React.ReactNode,
    classNames?: string,
}>) => {
    return (
        <div
            className={`w-full px-[20px] ${classNames || ""}`}
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