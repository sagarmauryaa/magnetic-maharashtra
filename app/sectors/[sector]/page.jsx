import React from 'react'
import SectorsClient from './page-client';
import sectorsData from './sectorsData';

 
const page = async ({ params }) => { 
  const selectedSector = sectorsData.find(
    (item) => item.pathName === params.sector
  ); 
  const data = selectedSector ? [selectedSector] : []
  return (
    <SectorsClient filteredData={data} />
  )
}

export default page