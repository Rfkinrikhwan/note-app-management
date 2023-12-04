import React from "react";
import { FaSearch } from "react-icons/fa";

function Search({ value, setSearch }) {
  return (
    <>
      <div className="search-wrap">
        <input
          type="text"
          placeholder="Search your notes here..."
          value={value}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch />
      </div>
    </>
  );
}

export default Search;
