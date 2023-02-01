import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter(
      (listing) => listing.id !== deletedListing.id
    );
    setListings(updatedListings);
  }

  function handleSearch(searchTerm) {
    const updatedListings = listings.filter((listing) =>
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("from app", searchTerm);
    console.log(updatedListings);
    setListings(updatedListings);
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer listings={listings} onDelete={handleDeleteListing} />
    </div>
  );
}

export default App;
