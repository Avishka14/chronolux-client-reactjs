import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Brands from "../../components/home_components/Brands";
import Brands_Shop from "./route_components/Brand_Route/Brands_Shop";

export default function Brands_Route() {
  return (
    <div>
      <Navbar />
      <Brands/>
      <Brands_Shop/>

      <Footer />
    </div>
  );
}
