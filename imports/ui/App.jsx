// App.js
import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Restaurant } from './Restaurant';
import { RestaurantsCollection } from '../api/RestaurantsCollection';
import { SearchBar } from './SearchBar';

export const App = () => {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const restaurants = useTracker(() => {
    const query = showAll ? {} : { name: { $regex: searchTerm, $options: 'i' } };
    return RestaurantsCollection.find(query).fetch();
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <h1>resOS</h1>
      <label>
        Show All Restaurants:
        <input
          type="checkbox"
          checked={showAll}
          onChange={() => setShowAll(!showAll)}
        />
      </label>


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

      <SearchBar onSearch={handleSearch} />
    </>
  );
};
