import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <form>
      <div>
        <label htmlFor="location"></label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Enter Location"
          className="search-input"
        />
      </div>
      <button type="submit" className="entry-button">
        Enter
      </button>
    </form>
  );
};
export default Search;
