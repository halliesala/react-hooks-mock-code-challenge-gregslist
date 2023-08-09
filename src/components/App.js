import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";



function App() {

  const [listings, setListings] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  // const [sortCompareFuncs, setSortCompareFuncs] = useState({
  //   location: 'neutral',
  //   description: 'neutral',
  //   id: 'neutral',
  // });
  const [sortBy, setSortBy] = useState({
    'field': null,
    'order': null,
  });

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(data => data.json())
      .then(data => setListings(data));
  }
    ,
    []
  )

  function addNewListing(listing) {
    const POST_OPTIONS = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(listing)
    }
    fetch('http://localhost:6001/listings', POST_OPTIONS)
    .then(data => data.json())
    .then(newListing => {
      setListings([...listings, newListing]);
    })
  }
  
  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        // sortCompareFuncs={sortCompareFuncs}
        // setSortCompareFuncs={setSortCompareFuncs}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <NewListingForm addNewListing={addNewListing}/>
      <ListingsContainer 
        listings={listings}
        setListings={setListings}
        searchTerm={searchTerm} 
        // sortCompareFuncs={sortCompareFuncs}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
