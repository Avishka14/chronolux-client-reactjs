import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBox() {
  return (
    <div className="searchBox-container">

      <div class="input-container">
        <input type="text" id="customInput" class="custom-input" />
        <label for="customInput" class="custom-label">
          {" "}
          Search{" "}
        </label>
        <span class="custom-underline"></span>
      </div>
      <button className="search-button">
        <SearchIcon className="search-button-m" />
      </button>
    </div>
  );
}
