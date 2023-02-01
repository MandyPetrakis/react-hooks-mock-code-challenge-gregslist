import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, updateSearchTerm] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
