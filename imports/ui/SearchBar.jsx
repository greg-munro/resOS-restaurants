import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} role="search">
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
