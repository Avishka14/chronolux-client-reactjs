import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Routes.css";
import Accessories_Grid from "./route_components/Accessories_Route/Accessories_Grid";
import { accessories } from "./route_components/Accessories_Route/Accessories_Data";

export default function Accessories_Route() {
  return (
    <div>
      <Navbar />
      <div className="accessories-container">
        <div className="hero-section">
          <div className="main-div">
            <div className="incentive-container">
              <div className="text-body-shop">
                <h3>Upgrade Your Watch Experience </h3>
                <h1>Straps, Boxes, Tools, and more starting at $9.99</h1>
                <h1>Swap it. Style it. Accessorize it your way</h1>
              </div>
            </div>
          </div>
        </div>
        
        {
          accessories.map((brand) =>(
            <Accessories_Grid key={brand.name} brand={brand} >
              <h1>{brand.name}</h1>
            </Accessories_Grid>
          ))
        }

      </div>
      <Footer />
    </div>
  );
}
