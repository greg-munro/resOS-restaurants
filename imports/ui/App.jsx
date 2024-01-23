// App.js
import React, { useState } from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { Restaurant } from './Restaurant'
import { RestaurantsCollection } from '../api/RestaurantsCollection'
import { SearchBar } from './SearchBar'
import CuisineBtn from './CuisineBtn'

export const App = () => {
  const [showAll, setShowAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentScreen, setCurrentScreen] = useState('home')
  // set background color
  document.body.className = currentScreen === 'all' ? 'white-background' : ''

  const restaurants = useTracker(() => {
    const query = showAll ? {} : { name: { $regex: searchTerm, $options: 'i' } }
    return RestaurantsCollection.find(query).fetch()
  })

  const handleShowAllRestaurants = () => {
    setCurrentScreen('all')
  }
  const handleBackBtn = () => {
    setCurrentScreen('home')
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
            <SearchBar />
            <CuisineBtn />
            <button className='btn-standard' onClick={handleShowAllRestaurants}>
              All Restaurants
            </button>
          </div>
        </>
      )}

      {currentScreen === 'all' && (
        <div className='all-container'>
          <ul>
            <button onClick={handleBackBtn} className='btn-standard'>
              Back
            </button>
            {restaurants.map((restaurant) => (
              <Restaurant
                key={restaurant._id}
                name={restaurant.name}
                openingHours={restaurant.opening_hours}
                image={restaurant.image}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
