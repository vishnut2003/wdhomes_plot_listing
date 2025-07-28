'use client';

import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { RiCircleFill } from "@remixicon/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PlotItemData } from ".";

const GoogleMapForListings = ({}: {
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
            zoom={12}
            center={{
              lat: 28.6139,
              lng: 77.2090,
            }}
          >
            <OverlayView
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              position={{
                lat: 28.6139,
                lng: 77.2090,
              }}
            >

              <Popover>
                <PopoverTrigger
                  className="bg-white p-[2px] rounded-full"
                >
                  <RiCircleFill
                    size={15}
                    className="text-wdhomes-color-primary"
                  />
                </PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
              </Popover>

            </OverlayView>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default GoogleMapForListings