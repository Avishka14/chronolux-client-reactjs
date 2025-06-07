import React from "react";
import "./HomeComponents.css";
import { brands } from "./brands-data/Brands_Data";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";

function Brands_SingleView() {
  const { id } = useParams();
  const brand = brands[id];

  if (!brand) return <p> Brand not Available</p>;
  return (
    <>
      <NavBar />
      
      <div className="brands-singleview-container">
        <div className="coverPage-container">
          <div className="singleView-img-container">
            <h1 className="singleView-heading"> </h1>
          </div>
        </div>

        <div className="singleView-section-II">
          <div className="brand-name-heading">
            <h1>
              Shop Your Favourite Watches from {brand.brandName} with ChronoLux!
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Brands_SingleView;
