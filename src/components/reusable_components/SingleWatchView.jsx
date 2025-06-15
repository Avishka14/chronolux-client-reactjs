import React from "react";
import Breadcrumb from "./BreadCrumb";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BestSelling from "../home_components/BestSelling";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function SingleWatchView() {
  const path = [
    { label: "Brand", url: "/brand" },
    { label: "brandName", url: null },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb path={path} />

      <div className="singleView-Container">
        <div className="singleView-price-container">
          <div className="singleView-Icon">
            <span> 
              <FavoriteBorderOutlinedIcon />
            </span>
            <span>
              <ShoppingCartOutlinedIcon />
            </span>
          </div>

          <div>
            
            <div className="singleView-hr">
                <hr />
            </div>

            <h2 className="singleView-brand">Everyday Ruck Snack</h2>

            <h1 className="singleView-title">Everyday Ruck Snack</h1>

            <div className="singleView-price">
              <span className="">$220</span>
            </div>

            <p className="singleView-description">
              Don’t compromise on snack-carrying capacity with this lightweight
              and spacious bag. The drawstring top keeps all your favorite
              chips, crisps, fries, biscuits, crackers, and cookies secure.
            </p>

            <button className="singleView-button">Check Out</button>


          </div>
        </div>

        <div className="singleView-img-container">
          <img
            src="public\assets\brand-img\brand-cover-img\Audemars Piguet logo wallpaper.jpg"
            alt="Everyday Ruck Snack"
          />
        </div>
      </div>
      <BestSelling />
      <Footer />
    </>
  );
}

export default SingleWatchView;
