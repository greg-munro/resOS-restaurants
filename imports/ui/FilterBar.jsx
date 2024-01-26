import React from 'react'
import Filter from './Filter'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const FilterBar = ({ restaurantsData, selectedFilter, setSelectedFilter, resetFilters }) => {
  // ensure values are only mapped over once, ensuring unique values in dropdown
  const tags = Array.from(
    new Set(restaurantsData.flatMap((restaurant) => restaurant.tags))
  )
  const handleClearFilters = () => {
    setSelectedFilter('');
  };

  return (
    <div className='nav-bar'>
    <div className='nav-controls'>
      <Filter
        label='Style'
        options={tags}
        selectedValue={selectedFilter}
        setSelectedValue={setSelectedFilter}
        resetFilters={resetFilters}
      />
      <CancelOutlinedIcon className='clear' onClick={handleClearFilters}/>
      </div>
    </div>
  )
}

export default FilterBar
