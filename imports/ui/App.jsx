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

  const restaurants = useTracker(() => {
    const query = showAll ? {} : { name: { $regex: searchTerm, $options: 'i' } }
    return RestaurantsCollection.find(query).fetch()
  })

  const handleSearch = (term) => {
    setSearchTerm(term)
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
            <SearchBar onSearch={handleSearch} />
            <CuisineBtn />
            <button className='btn-standard'>All Restaurants</button>
          </div>
        </>
      )}

      {showAll && (
        <ul>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant._id}
              name={restaurant.name}
              openingHours={restaurant.opening_hours}
            />
          ))}
        </ul>
      )}
    </>
  )
}
