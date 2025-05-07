import React, { useState } from "react";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

export default function Navbar() {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-right">
          <img src="src\assets\icons\chronolux-png.png" className="logo-nav" />
          <span className="nav-title">ChronoLux</span>
        </div>

        <div className="navbar-center">
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>BRANDS</li>
            <li>ACCESSORIES</li>
            <li>OFFERS</li>
          </ul>
        </div>

        <div className="navbar-left">
          <div className="search-box-icon">
            <SearchIcon className="search-icon-nav" />
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
          <button className="btn-expand" onClick={toggleExpand}>
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
     
      <div className={`link-tab-expanded ${isExpanded ? "show" : ""}`}>
      <div className="link-group">
          <a href="">SHOP</a>
          <a href="">BRANDS</a>
          <a href="">ACCESSORIES</a>
          <a href="">OFFERS</a>
          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">Join Us</a>
        </div>
      </div>
      
  

    </div>
  );
}
