import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

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
          <img src="src/assets/icons/chronolux-png.png" />
        </div>

        <div className="sidenav-para">
          <p>Welcome to ChronoLux ! Your Ultimate Luxury Watch Partnter !</p>
        </div>

        <div className="main-link-tab">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Brands</li>
            <li>Accessories</li>
            <li>Offers</li>
          </ul>
        </div>

        <div style={{ width: "160px", textAlign: "center", margin: "0 auto" }}>
          <hr />
        </div>

        <div className="main-link-tab">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Join Us</li>
          </ul>
        </div>

       
      </div>
    </div>
  );
}
