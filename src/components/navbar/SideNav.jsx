import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Link } from "react-router-dom";

export default function SideNav({ onClose }) {
  return (
    <div>
      <div className="sidenav-container">
        <div className="close-icon-c">
          <button onClick={onClose}>
            <HighlightOffOutlinedIcon />
          </button>
        </div>

         <div className="side-nav-img">
          <img src="/assets/icons/chronolux-png.png" />
        </div>

        <div className="sidenav-para">
          <p>Welcome to ChronoLux ! Your Ultimate Luxury Watch Partnter !</p>
        </div>

        <div className="main-link-tab">
          <ul>
             <li> <Link to="/"> Home </Link> </li>
             <li>  <Link to="/shop">   Shop </Link> </li>
             <li>  <Link to="/brand">   Brands </Link></li>
             <li>  <Link to="/accessories">  Accessories </Link></li>
             <li>  <Link to="/offers"> Offers  </Link></li>
          </ul>
        </div>

        <div style={{ width: "160px", textAlign: "center", margin: "0 auto" }}>
          <hr />
        </div>

        <div className="main-link-tab">
          <ul>
            <li> <Link to="/aboutus"> About Us </Link> </li>
            <li> <Link to="/contact"> Contact </Link> </li>
            <li> <Link to ="/joinus" > Join Us </Link> </li>
          </ul>
        </div>

       
      </div>
    </div>
  );
}
