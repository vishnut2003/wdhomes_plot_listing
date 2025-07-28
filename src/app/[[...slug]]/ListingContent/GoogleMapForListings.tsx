'use client';

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { PlotItemData } from ".";
import GoogleMapPinPoint from "./GoogleMapPinPoint";

const GoogleMapForListings = ({ defaultPlotData }: {
  defaultPlotData: PlotItemData[],
}) => {

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
            zoom={11}
            center={{
              lat: defaultPlotData[0] ? defaultPlotData[0].location.pinPoint.lat : 28.6139,
              lng: defaultPlotData[0] ? defaultPlotData[0].location.pinPoint.lng : 77.2090,
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
        </LoadScript>
      </div>
    </div>
  )
}

export default GoogleMapForListings