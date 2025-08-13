import { getDashboardAxios } from "@/axios/dashboardApi";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";
import ImagesSection from "./ImagesSection";
import ListingData from "./ListingData";
import GoogleMapLocation from "./GoogleMap";
import SingleListingDescription from "./Description";

const SingleListingPage = async ({
  location,
  slug,
}: {
  location: string,
  slug: string,
}) => {

  let apiResponse: AxiosResponse | null;

  try {

    const axios = getDashboardAxios();
    apiResponse = await axios.post('/api/listing-manager/get-by-slug', { slug });
    console.log(apiResponse?.data);

  } catch (err) {
    console.error(err);
    notFound();
  }

  if (
    !apiResponse?.data ||
    apiResponse.data.location.city !== location ||
    apiResponse.data.status !== "publish"
  ) {
    notFound();
  }

  const featuredImage = apiResponse.data['featuredImage'] as string;
  const galleryImages = apiResponse.data['galleryImages'] as string[];

  const name = apiResponse.data['name'] as string;
  const address = apiResponse.data['location']['address'] as string;
  const price = apiResponse.data['price'] as number;
  const attributes = apiResponse.data['attributes'] as { label: string, value: string }[];

  const mapPinPos = apiResponse.data['location']['pinpoint'] as { lat: number, lng: number };

  const description = apiResponse.data['description'] as string;

  return (
    <div>
      <ImagesSection
        featured={featuredImage}
        gallery={galleryImages}
      />

      <ListingData
        name={name}
        address={address}
        price={price}
        attributes={attributes}
      />

      <GoogleMapLocation
        pinPos={mapPinPos}
      />

      <SingleListingDescription
        description={description}
      />
    </div>
  )
}

export default SingleListingPage