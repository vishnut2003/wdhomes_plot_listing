import BasicLayouts from '@/layouts/BasicLayouts'
import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'
import ListingsPageHeader from './PageHeader'
import FiltersButtons from './Filters'
import ListingContent from './ListingContent'

const SingleLocationListingsPage = () => {
    return (
        <BasicLayouts>

            {/* Page Header */}
            <SectionLayout
                classNames='py-[30px]'
            >
                <ListingsPageHeader />
            </SectionLayout>

            {/* Listings filters */}
            <SectionLayout
                classNames='py-[10px]'
            >
                <FiltersButtons />
            </SectionLayout>

            {/* Listings Content */}
            <SectionLayout
                classNames='pt-[20px] pb-[10px]'
            >
                <ListingContent />
            </SectionLayout>

        </BasicLayouts>
    )
}

export default SingleLocationListingsPage