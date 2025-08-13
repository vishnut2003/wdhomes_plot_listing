import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'

const SingleListingDescription = ({ description }: {
    description: string,
}) => {
    return (
        <SectionLayout
            className='py-[40px]'
        >
            <div
                className='single-listing-description-content w-full'
                dangerouslySetInnerHTML={{ __html: description }}
            ></div>
        </SectionLayout>
    )
}

export default SingleListingDescription