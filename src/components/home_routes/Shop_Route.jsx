import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Routes.css";
import Shop_Offers from "./route_components/Shop_Route/Shop_Offers";
import Mens_Watches from "./route_components/Shop_Route/Mens_Watches";
import Woman_Watches from "./route_components/Shop_Route/Woman_Watches";
import Unisex_Watches from "./route_components/Shop_Route/Unisex_Watches";

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

      <div className="category-container-shop">
        <h1>Shop By Categories</h1>

        <div className="cat-div-shop">
          <a href="#">Quartz Watches</a>
        </div>

        <div className="cat-div-shop">
          <a href="#">Diver Watches</a>
        </div>

        <div className="cat-div-shop">
          <a href="#">Field Watch</a>
        </div>

        <div className="cat-div-shop">
          <a href="#">GMT Watches</a>
        </div>

        <div className="cat-div-shop">
          <a href="#">Skeleton Watches</a>
        </div>

        <div className="cat-div-shop">
          <a href="">Pocket Watches</a>
        </div>

        <div className="small-shop-cat">
           <a href="#">Quartz </a>
          <a href="#">Diver </a>
          <a href="#">Field </a>
          <a href="#">Field </a>
          <a href="#">GMT </a>
          <a href="#">Skeleton </a>
          <a href="">Pocket </a>
        </div>
      </div>
      <br />

      <div style={{width:'80vw' , marginLeft:'10%' , marginRight:'10%' , padding:'20px'}}>
        <hr />
      </div>

      <Shop_Offers/>

      <div style={{width:'80vw' , marginLeft:'10%' , marginRight:'10%' , padding:'20px'}}>
        <hr />
      </div>

      <Mens_Watches/>
      
        <div style={{width:'80vw' , marginLeft:'10%' , marginRight:'10%' , padding:'20px'}}>
        <hr />
        </div>
      
      <Woman_Watches/>

       <div style={{width:'80vw' , marginLeft:'10%' , marginRight:'10%' , padding:'20px'}}>
        <hr />
        </div>

      <Unisex_Watches/>

      <Footer />
    </div>
  );
}
