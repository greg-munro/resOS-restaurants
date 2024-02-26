import React, { useState } from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { Restaurant } from './Restaurant'
import { RestaurantsCollection } from '../api/RestaurantsCollection'
import { SearchBar } from './SearchBar'
import CuisineBtn from './CuisineBtn'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined'
import Greeting from './Greeting'
import FilterBar from './FilterBar'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home')
  const [selectedFilter, setSelectedFilter] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  // getting restaurants from DB
  const restaurants = useTracker(() => {
    return RestaurantsCollection.find().fetch()
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  // setting background colors depending on user location/selection
  document.body.className = `${darkMode ? 'dark-mode' : ''} 
  ${currentScreen === 'all' ? 'white-background' : ''}`

  const resetFilters = () => {
    setSelectedFilter('')
    setSearchTerm('')
    setSelectedCuisine('')
  }

  const handleShowAllRestaurants = () => {
    resetFilters()
    setCurrentScreen('all')
  }

  const handleBackBtn = () => {
    resetFilters()
    setCurrentScreen('home')
  }

  const handleSearch = (term) => {
    resetFilters()
    setSearchTerm(term)
    setCurrentScreen('all')
  }

  const handleCuisineClick = (cuisine) => {
    resetFilters()
    setCurrentScreen('all')
    setSelectedCuisine(cuisine)
  }

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const styleMatch =
      !selectedFilter || restaurant.tags.includes(selectedFilter)

    const searchMatch =
      !searchTerm ||
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    
    const cuisineMatch =
      !selectedCuisine || restaurant.tags.includes(selectedCuisine)

    return styleMatch && searchMatch && cuisineMatch
  })

  return (
    <>
      {currentScreen === 'home' && (
        <div className='home-search'>
 
          <img
            src='/assets/resos-logos-idgmzEl7lk.svg'
            className='resos-logo'
          ></img>
          <SearchBar onSubmit={handleSearch} />
          <CuisineBtn onCuisineClick={handleCuisineClick} />
          <button
            className='btn-standard all'
            onClick={handleShowAllRestaurants}
          >
            All Restaurants
          </button>
        </div>
      )}

      {currentScreen === 'all' && (
        <>
          <div className='detail-header'>
            <button onClick={handleBackBtn} className='btn-standard'>
              <KeyboardBackspaceOutlinedIcon />
            </button>
            <Greeting />
            <div className='toggle-dark-mode'>
              <button className='toggle' onClick={toggleDarkMode}>
                {darkMode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
              </button>
            </div>
          </div>

          <FilterBar
            restaurantsData={restaurants}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            resetFilters={resetFilters}
            darkMode={darkMode}
          />

          {filteredRestaurants.length > 0 ? (
            <ul className='restaurant-list'>
              {filteredRestaurants.map((restaurant) => (
                <Restaurant
                  key={restaurant._id}
                  name={restaurant.name}
                  address={restaurant.address}
                  tags={restaurant.tags}
                  creation_date={restaurant.creation_date}
                  openingHours={restaurant.opening_hours}
                  image={restaurant.image}
                />
              ))}
            </ul>
          ) : (
            <p className='not-found'>
              No restaurants found with the search term.
            </p>
          )}
        </>
      )}
    </>
  )
}
