'use client';

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapForListings = () => {

  const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_CLOUDE_API;

  if (!GOOGLE_API) {
    throw new Error("NEXT_PUBLIC_GOOGLE_CLOUDE_API not available");
  }

  return (
    <div
      className="w-full"
    >
      <div
        className="sticky top-[70px]"
      >
        <LoadScript
          googleMapsApiKey={GOOGLE_API}
        >
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "85vh",
            }}
            zoom={12}
            center={{
              lat: 28.6139,
              lng: 77.2090,
            }}
          ></GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default GoogleMapForListings