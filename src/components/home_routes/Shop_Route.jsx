import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Routes.css";

export default function Shop_Route() {
  return (
    <div>
      <Navbar />
      <div className="main-div">
        <div className="incentive-container">
          <div className="text-body-shop">
           <h1>Explore Premium Watches That Define Your Style </h1>
          <h2> Timeless Designs, Unmatched Quality</h2>
          <h3>Start Shopping Now!</h3>
          <button className="btn-shop-route">Log In</button>
          </div>
        
        </div>
      </div>

      <Footer />
    </div>
  );
}
