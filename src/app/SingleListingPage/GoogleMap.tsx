'use client';

import SectionLayout from '@/layouts/SectionLayout';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import React from 'react'

const GoogleMapLocation = ({
    pinPos
}: {
    pinPos: {
        lat: number,
        lng: number,
    },
}) => {

    const CLOUD_API_SCRIPT = process.env.NEXT_PUBLIC_GOOGLE_CLOUDE_API;

    if (!CLOUD_API_SCRIPT) {
        throw new Error("NEXT_PUBLIC_GOOGLE_CLOUDE_API is not specified in .env");
    }

    const { isLoaded } = useLoadScript({ googleMapsApiKey: CLOUD_API_SCRIPT })

    if (isLoaded) {
        return (
            <SectionLayout>
                <GoogleMap
                    mapContainerStyle={{
                        width: "100%",
                        height: "400px",
                        borderRadius: "10px",
                    }}
                    zoom={11}
                    center={pinPos}
                >
                    {
                        pinPos &&
                        <Marker
                            position={pinPos}
                        />
                    }
                </GoogleMap>
            </SectionLayout>
        )
    }
}

export default GoogleMapLocation