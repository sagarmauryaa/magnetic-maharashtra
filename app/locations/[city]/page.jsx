  
import LocationsClient from './page-client';
import locationData from './locationData';


const page = async ({ params }) => {
  const selectedSector = locationData.find(
    (item) => item.id === params.city
  );
  const data = selectedSector ? [selectedSector] : [];
  console.log(data);
  
  return (
    <LocationsClient filteredData={data} />
  )
}

export default page