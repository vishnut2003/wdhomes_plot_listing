import BasicLayouts from '@/layouts/BasicLayouts'
import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'
import ListingsPageHeader from './PageHeader'
import FiltersButtons from './Filters'
import ListingContent from './ListingContent'
import { notFound } from 'next/navigation'

type PageProps = {
    params: Promise<{ slug: string[] }>;
};

const listingUrlsMaps: {
    [key: string]: string,
} = {
    "new-homes-noida": "Noida",
    "new-homes-greater-noida": "Greater Noida",
    "new-homes-gurugram": "Gurugram",
    "new-homes-ghaziabad": "Ghaziabad",
    "new-homes-goa": "goa",
}

const SingleLocationListingsPage = async ({ params }: PageProps) => {

    const { slug } = await params;
    const [locationPath] = slug || [];

    console.log(slug);

    const location = listingUrlsMaps[locationPath];

    if (!location) {
        notFound();
    }

    return (
        <BasicLayouts>

            {/* Page Header */}
            <SectionLayout
                classNames='py-[30px]'
            >
                <ListingsPageHeader
                    defaultLocation={location}
                />
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