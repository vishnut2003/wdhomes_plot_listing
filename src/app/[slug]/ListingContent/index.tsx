import React from 'react'
import PlotLists from './PlotLists'
import GoogleMapForListings from './GoogleMapForListings'

const ListingContent = () => {
  return (
    <div>

        {/* Result Count */}
        <div>
            <p
                className='font-medium'
            >Showing 48 Results</p>
        </div>

        {/* Plot lists with Google Map */}
        <div
            className='flex items-stretch mt-[20px] gap-2.5'
        >
            <PlotLists/>
            <GoogleMapForListings/>
        </div>
    </div>
  )
}

export default ListingContent