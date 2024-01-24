// App.js
import React, { useState } from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { Restaurant } from './Restaurant'
import { RestaurantsCollection } from '../api/RestaurantsCollection'
import { SearchBar } from './SearchBar'
import CuisineBtn from './CuisineBtn'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import Greeting from './Greeting'
import FilterBar from './FilterBar'

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // set background color
  document.body.className = currentScreen === 'all' ? 'white-background' : ''

  const restaurants = useTracker(() => {
    return RestaurantsCollection.find().fetch()
  })

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const styleMatch = !selectedFilter || restaurant.tags.includes(selectedFilter);
    const statusMatch = !selectedStatus || restaurant.status === selectedStatus;
    const searchMatch =
    !searchTerm ||
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

  return styleMatch && statusMatch && searchMatch;
  });



  const handleShowAllRestaurants = () => {
    setCurrentScreen('all')
  }
  const handleBackBtn = () => {
    setCurrentScreen('home')
  }

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentScreen('all')
  }

  return (
    <>
      {currentScreen === 'home' && (
        <>
          <div className='home-search'>
            <img
              src='/assets/resos-logos-idgmzEl7lk.svg'
              className='resos-logo'
            ></img>
           <SearchBar onSubmit={handleSearch} />

            <CuisineBtn />
            <button
              className='btn-standard all'
              onClick={handleShowAllRestaurants}
            >
              All Restaurants
            </button>
          </div>
        </>
      )}

      {currentScreen === 'all' && (
        <>
          <div className='detail-header'>
            <button onClick={handleBackBtn} className='btn-standard'>
              <KeyboardBackspaceOutlinedIcon></KeyboardBackspaceOutlinedIcon>
            </button>
            <Greeting />
          </div>

          <FilterBar
            restaurantsData={restaurants}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />

          <ul className='restaurant-list'>
            {filteredRestaurants.map((restaurant) => (
              <Restaurant
                key={restaurant._id}
                name={restaurant.name}
                address={restaurant.address}
                tags={restaurant.tags}
                status={restaurant.status}
                creation_date={restaurant.creation_date}
                openingHours={restaurant.opening_hours}
                image={restaurant.image}
              />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
