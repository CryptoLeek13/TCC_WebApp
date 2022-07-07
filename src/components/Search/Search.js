import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <label>
      <input
        type="text"
        placeholder="Enter Location"
        className="search-input"
      />
    </label>
  );
};
export default Search;
