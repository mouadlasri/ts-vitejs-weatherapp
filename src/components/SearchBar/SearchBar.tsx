import React from "react";

import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search for a city..." />
      <button>Search</button>
    </div>
  );
};
