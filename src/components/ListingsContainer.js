import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  const listingCards = listings.map((listing) => (
    <ListingCard listing={listing} key={listing.id} onDelete={onDelete} />
  ));
  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
