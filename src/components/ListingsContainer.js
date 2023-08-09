import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { COMPARE_FUNCS } from './compare_funcs'


function ListingsContainer({ searchTerm, sortBy }) {

  const [listings, setListings] = useState([]);

  useEffect(() => {
      const compareFunc = COMPARE_FUNCS?.[sortBy?.field]?.[sortBy?.order];
      const sortedListings = listings.toSorted(compareFunc);
      console.log(sortedListings)
      setListings(sortedListings);
    }
    ,
    [sortBy]
  )

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(data => data.json())
      .then(data => setListings(data));
  }
    ,
    []
  )

  function deleteListing(id) {
    console.log(`TODO: Delete listing with id ${id}`);
    fetch(`http://localhost:6001/listings/${id}`, { method: 'DELETE' })
      .then(() => {
        const idx = listings.findIndex(listing => listing.id === id);
        setListings([...listings.slice(0, idx), ...listings.slice(idx + 1)]);
      })
  }




  return (
    <main>
      <ul className="cards">
        {
          listings
            .filter(listing => {
              return listing.description.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map(listing => {
              return (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  deleteListing={() => deleteListing(listing.id)}
                />
              )
            })
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
