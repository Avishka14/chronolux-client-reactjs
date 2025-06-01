import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBox() {
  return (

    <div className="searchBox-container">
      <div className="input-container">

        <input type="text" id="customInput" className="custom-input" />
        <label htmlFor="customInput" className="custom-label">
          {" "}
          Search{" "}
        </label>
        <span  className="custom-underline"></span>
      </div>
      <button className="search-button">
        <SearchIcon className="search-button-m" />
      </button>
    </div>
  );
}
