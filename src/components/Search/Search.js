import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <label className="search-label">
      <input
        type="text"
        placeholder={props.placeholder}
        className="search-input"
        value={props.location}
        onChange={(e) => props.handleLocation(e.target.value)}
      />
    </label>
  );
};
export default Search;
