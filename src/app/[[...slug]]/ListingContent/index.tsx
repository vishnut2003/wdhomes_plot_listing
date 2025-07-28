import React from 'react'
import PlotLists from './PlotLists'
import GoogleMapForListings from './GoogleMapForListings'

export interface PlotItemData {
    image: string,
    name: string,
    location: {
        pinPoint: {
            lat: number,
            lng: number,
        },
        state: string,
        city: string,
        zipCode: string,
    },
    startPrice: number,
    homeData: {
        beds: number,
        baths: number,
        cars: number,
        sqft: number,
    }
}

const dummyData: PlotItemData[] = [
    {
        image: "/nextjs-images/dummy/dummy-listing-image.jpg",
        name: "Plan 1908",
        location: {
            state: "Delhi",
            city: "shahdara",
            zipCode: "125435",
            pinPoint: {
                lat: 28.687547,
                lng: 77.254572,
            },
        },
        startPrice: 976990,
        homeData: {
            beds: 3,
            baths: 4,
            cars: 2,
            sqft: 1967,
        }
    },
    {
        image: "/nextjs-images/dummy/dummy-listing-image.jpg",
        name: "Plan 1908",
        location: {
            state: "Delhi",
            city: "bhajan pura",
            zipCode: "123212",
            pinPoint: {
                lat: 28.724627,
                lng: 77.258070
            }
        },
        startPrice: 976990,
        homeData: {
            beds: 3,
            baths: 4,
            cars: 2,
            sqft: 1967,
        }
    },
    {
        image: "/nextjs-images/dummy/dummy-listing-image.jpg",
        name: "Plan 1908",
        location: {
            state: "Delhi",
            city: "gokalpuri",
            zipCode: "123212",
            pinPoint: {
                lat: 28.742787,
                lng: 77.125691
            }
        },
        startPrice: 976990,
        homeData: {
            beds: 3,
            baths: 4,
            cars: 2,
            sqft: 1967,
        }
    },
]

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
                <PlotLists
                    defaultPlotData={dummyData}
                />
                <GoogleMapForListings
                    defaultPlotData={dummyData}
                />
            </div>
        </div>
    )
}

export default ListingContent