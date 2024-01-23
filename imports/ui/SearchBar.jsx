import React from 'react';

export const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
<form onsubmit="event.preventDefault();" role="search">
  <label className="search-label" for="search">Search for stuff</label>
  <input id="search" type="search" placeholder="Search..." autofocus required autoComplete='off' />
  <button className="search-submit" type="submit">Go</button>    
</form>
  );
};
