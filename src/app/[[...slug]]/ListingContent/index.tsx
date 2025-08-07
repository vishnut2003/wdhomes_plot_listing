import React from 'react'
import PlotLists from './PlotLists'
import GoogleMapForListings from './GoogleMapForListings'
import FiltersButtons from '../Filters'
import { ListingsType } from '@/types/Listing'

const ListingContent = ({
    listingData
}: {
    listingData: {
        data: ListingsType[],
        page: number,
        totalPage: number,
        totalRecords: number,
    }
}) => {
    return (
        <div>
            <FiltersButtons />

            {/* Result Count */}
            <div>
                <p
                    className='font-medium mt-[20px]'
                >Showing 48 Results</p>
            </div>

            {/* Plot lists with Google Map */}
            <div
                className='flex items-stretch mt-[20px] gap-2.5'
            >
                <PlotLists
                    defaultPlotData={listingData.data}
                />
                <GoogleMapForListings
                    defaultPlotData={listingData.data}
                />
            </div>
        </div>
    )
}

export default ListingContent