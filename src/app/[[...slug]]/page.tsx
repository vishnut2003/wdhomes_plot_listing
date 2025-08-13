import BasicLayouts from '@/layouts/BasicLayouts'
import SectionLayout from '@/layouts/SectionLayout'
import React from 'react'
import ListingsPageHeader from './PageHeader'
import ListingContent from './ListingContent'
import { notFound } from 'next/navigation'
import SingleListingPage from '../SingleListingPage'
import { AxiosResponse } from 'axios'
import { getDashboardAxios } from '@/axios/dashboardApi'
import { ListingsType } from '@/types/Listing'

type PageProps = {
    params: Promise<{ slug: string[] }>;
};

const listingUrlsMaps: {
    [key: string]: string,
} = {
    "new-homes-noida": "noida",
    "new-homes-greater-noida": "greater-noida",
    "new-homes-gurugram": "gurugram",
    "new-homes-ghaziabad": "ghaziabad",
}

const SingleLocationListingsPage = async ({ params }: PageProps) => {

    const { slug } = await params;
    const [locationPath, listingSlug] = slug || [];

    const location = listingUrlsMaps[locationPath];

    if (!location) {
        notFound();
    }

    if (location && listingSlug) {
        return (
            <BasicLayouts>
                <SingleListingPage
                    location={location}
                    slug={listingSlug}
                />
            </BasicLayouts>
        )
    }

    let apiResponse: AxiosResponse<{
        data: ListingsType[],
        page: number,
        totalPage: number,
        totalRecords: number,
    }> | null = null;

    try {

        const axios = getDashboardAxios();
        apiResponse = await axios.post('/api/listing-manager/get-all', {
            city: location,
            page: 1,
        })

    } catch (err) {
        console.error(err);
        notFound();
    }

    if (!apiResponse || !apiResponse.data) {
        notFound();
    }

    const listingData = apiResponse.data;

    return (
        <BasicLayouts>

            {/* Page Header */}
            <SectionLayout
                className='py-[30px]'
            >
                <ListingsPageHeader
                    defaultLocation={location}
                />
            </SectionLayout>

            {/* Listings Content */}
            <SectionLayout
                className='pt-[20px] pb-[10px]'
            >
                <ListingContent
                    listingData={listingData}
                />
            </SectionLayout>

        </BasicLayouts>
    )
}

export default SingleLocationListingsPage