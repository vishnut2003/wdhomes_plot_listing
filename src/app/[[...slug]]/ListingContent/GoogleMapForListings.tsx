'use client';

import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";
import GoogleMapPinPoint from "./GoogleMapPinPoint";
import { ListingsType } from "@/types/Listing";

const GoogleMapForListings = ({ defaultPlotData }: {
  defaultPlotData: ListingsType[],
}) => {

  const GOOGLE_API = process.env.NEXT_PUBLIC_GOOGLE_CLOUDE_API;

  if (!GOOGLE_API) {
    throw new Error("NEXT_PUBLIC_GOOGLE_CLOUDE_API not available");
  }

  const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_API });

  return (
    <div
      className="w-full"
    >
      <div
        className="sticky top-[70px]"
      >
        {
          isLoaded &&
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "85vh",
            }}
            zoom={11}
            center={{
              lat: defaultPlotData[0] ? defaultPlotData[0].location.pinpoint.lat : 28.6139,
              lng: defaultPlotData[0] ? defaultPlotData[0].location.pinpoint.lng : 77.2090,
            }}
          >
            {
              defaultPlotData.map((plotData, index) => (
                <GoogleMapPinPoint
                  plotData={plotData}
                  key={index}
                />
              ))
            }
          </GoogleMap>
        }
      </div>
    </div>
  )
}

export default GoogleMapForListings