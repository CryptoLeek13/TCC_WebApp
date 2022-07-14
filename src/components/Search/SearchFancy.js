import React from 'react';
import './Search.css';

function SearchFancy(props) {
  return (
    <label htmlFor="search-fancy" className="search-fancy-label">
      <input
        type="text"
        id="search-fancy"
        placeholder={props.placeholder}
      ></input>
    </label> //whole search bar will have fancy transition
  );
}

export default SearchFancy;
