import React, { useState } from "react";

import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a city..." onChange={handleChange} />
        {/* <button type="submit">Search</button> */}
      </form>
    </div>
  );
};
