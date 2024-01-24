import React from 'react'
import Filter from './Filter'

const FilterBar = ({ restaurantsData }) => {

   // ensure values are only mapped over once, no need to repeat tags for dropdown
   const tags = Array.from(new Set(restaurantsData.flatMap((restaurant) => restaurant.tags)));
   const status = Array.from(new Set(restaurantsData.flatMap((restaurant) => restaurant.status)));

  return (
    <div className='nav-bar'>
      <Filter label='Style' restaurantsData={restaurantsData} options={tags} />
      <Filter label='Status' restaurantsData={restaurantsData} options={status} />
    </div>
  )
}

export default FilterBar
