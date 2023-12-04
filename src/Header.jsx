import React from "react";
import Search from "./components/Search";
import { FaUserCircle } from "react-icons/fa";

function Header({ value, setSearch }) {
  return (
    <>
      <div className="header-content">
        <div className="info-user">
          <FaUserCircle size={40} />
          <span>Somebody</span>
        </div>
        <Search value={value} setSearch={setSearch} />
      </div>
    </>
  );
}

export default Header;
