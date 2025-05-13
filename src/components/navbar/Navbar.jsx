import React, { useState } from "react";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import SearchBox from "./SearchBox";
import SideNav from "./SideNav";

export default function Navbar() {
  const [showSearchBox, setSearchBox] = useState(false);
  const [showSideNav , setSideNav] = useState(false);

  const handleClick = () => {
    setSearchBox((prev) => !prev);
  };

  const handleSideNav =() =>{
    setSideNav((prev) => !prev);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-right">
          <img src="src/assets/icons/chronolux-w-png.png" className="logo-nav" />
        </div>

        <div className="navbar-center">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Brands</li>
            <li>Accessories</li>
            <li>Offers</li>
          </ul>
        </div>

        <div className="navbar-left">
          <div className="search-box-icon">
            <button onClick={handleClick}>
              <SearchIcon className="search-icon-nav" />
            </button>
          </div>

          <div className="fav-box-icon">
            <FavoriteBorderOutlinedIcon className="fav-icon" />
            <span className="fav-icon-amount">1</span>
          </div>

          <div className="shopping-icon">
            <ShoppingBagOutlinedIcon className="shop-icon" />
            <span className="shopping-icon-amount">3</span>
          </div>

          <div className="account-icon">
            <AccountCircleOutlinedIcon className="account-icon-m" />
          </div>
        </div>

        <div className="expand-div">
          <button className="btn-expand" onClick={handleSideNav}>
            <ExpandCircleDownOutlinedIcon className="expand-div-icon" />
          </button>
        </div>
      </nav>

      <nav className="nav-small">
        <div className="small-nav-heading">
          <p>Welcome to ChronoLux ! Your Ultimate Luxury Watch Partnter !</p>
        </div>

        <div className="small-nav-end">
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Join Us</li>
          </ul>
        </div>
      </nav>

      <div className="searchBox-overlay">{showSearchBox && <SearchBox />}</div>
      <div className={`sideNav-overlay ${showSideNav ? "open" : ""}`} >
        {showSideNav && <SideNav onClose={handleSideNav}/>}
        </div>

    </div>
  );
}
