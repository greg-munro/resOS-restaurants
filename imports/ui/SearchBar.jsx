import React from 'react';

export const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleInputChange}
    />
  );
};
