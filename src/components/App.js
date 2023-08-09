import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {

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
      <ListingsContainer 
        searchTerm={searchTerm} 
        // sortCompareFuncs={sortCompareFuncs}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
