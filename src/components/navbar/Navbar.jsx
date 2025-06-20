import React, { Children, useState } from "react";
import "./Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import SearchBox from "./SearchBox";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import MiniLogo from "/assets/icons/chronolux-w-png.png";

export default function Navbar({ children }) {
  const [showSearchBox, setSearchBox] = useState(false);
  const [showSideNav, setSideNav] = useState(false);

  const handleClick = () => {
    setSearchBox((prev) => !prev);
  };

  const handleSideNav = () => {
    setSideNav((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-right">
          <img src={MiniLogo} alt="logo" />
        </div>

        <div className="navbar-center">
          <ul>
            <li>
              {" "}
              <Link to="/"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/shop"> Shop </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/brand"> Brands </Link>
            </li>
            <li>
              {" "}
              <Link to="/accessories"> Accessories </Link>
            </li>
            <li>
              {" "}
              <Link to="/offers"> Offers </Link>
            </li>
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
            <Link to="/account">
            <AccountCircleOutlinedIcon className="account-icon-m" />
            </Link>
          </div>
        </div>

        <div className="expand-div">
          <button className="btn-expand" onClick={handleSideNav}>
            <ExpandCircleDownOutlinedIcon className="expand-div-icon" />
          </button>
        </div>
      </nav>

      {children}

      <div className="searchBox-overlay">{showSearchBox && <SearchBox />}</div>
      <div className={`sideNav-overlay ${showSideNav ? "open" : ""}`}>
        {showSideNav && <SideNav onClose={handleSideNav} />}
      </div>
    </div>
  );
}
