// SearchBar.js
import React, { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm, ()=> console.log('clicked'));
  };

  return (
    <form id='search-form' onSubmit={handleSubmit} role="search">
      <label className="search-label" htmlFor="search">
        Search for a restaurant
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        autoComplete="off"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-submit" type="submit">
        Go
      </button>
    </form>
  );
};
