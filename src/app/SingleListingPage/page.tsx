
const SingleListingPage = ({
    location,
    slug,
}: {
    location: string,
    slug: string,
}) => {
  return (
    <div>
        <p>Location: {location}</p>
        <p>Slug: {slug}</p>
    </div>
  )
}

export default SingleListingPage