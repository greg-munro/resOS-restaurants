// App.js
import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Restaurant } from './Restaurant';
import { RestaurantsCollection } from '../api/RestaurantsCollection';
import { SearchBar } from './SearchBar';



export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const restaurants = useTracker(() => {
    const query = searchTerm ? { name: { $regex: searchTerm, $options: 'i' } } : {};
    return RestaurantsCollection.find(query).fetch();
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <h1>resOS</h1>
      
      <SearchBar onSearch={handleSearch} />

      <ul>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant._id}
            name={restaurant.name}
            openingHours={restaurant.opening_hours}
          />
        ))}
      </ul>
    </>
  );
};
