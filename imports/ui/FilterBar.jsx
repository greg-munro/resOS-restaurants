import React from 'react'
import Filter from './Filter'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const FilterBar = ({ restaurantsData, selectedFilter, setSelectedFilter, resetFilters, darkMode }) => {
  // ensure values are only mapped over once, no need to repeat tags for dropdown
  const tags = Array.from(
    new Set(restaurantsData.flatMap((restaurant) => restaurant.tags))
  )
  const handleClearFilters = () => {
    setSelectedFilter('');
  };

  return (
    <div className='nav-bar'>
      <Filter
        label='Style'
        options={tags}
        selectedValue={selectedFilter}
        setSelectedValue={setSelectedFilter}
        resetFilters={resetFilters}
        darkMode={darkMode}
      />
      <CancelOutlinedIcon className='clear' onClick={handleClearFilters}/>
    </div>
  )
}

export default FilterBar
