import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({searchTerm, setSearchTerm, sortBy, setSortBy}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <Sort 
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </header>
  );
}

export default Header;
