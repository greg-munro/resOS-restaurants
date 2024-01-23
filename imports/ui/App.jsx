// App.js
import React, { useState } from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { Restaurant } from './Restaurant'
import { RestaurantsCollection } from '../api/RestaurantsCollection'
import { SearchBar } from './SearchBar'
import CuisineBtn from './CuisineBtn'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

export const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home')
  // set background color
  document.body.className = currentScreen === 'all' ? 'white-background' : ''

  const restaurants = useTracker(() => {
   
    return RestaurantsCollection.find().fetch();
  });

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
        <>
        <button onClick={handleBackBtn} className='btn-standard'>
              <KeyboardBackspaceOutlinedIcon></KeyboardBackspaceOutlinedIcon>
            </button>
          <ul className='restaurant-list'>
            {restaurants.map((restaurant) => (
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
