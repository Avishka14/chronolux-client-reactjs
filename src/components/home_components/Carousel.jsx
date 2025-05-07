import React from "react";
import "./HomeComponents.css";

export default function Carousel() {
  return (
    <div className="carousel-body">
      <div className="carousel">
        <div className="slides">

          <div className="slide">
            <img src="src\assets\carousell_images\img-1.jpg" />
            <div className="overlay">
              <span className="gradient-text">Welcome to ChrnoLux <br /> Ultimate Watch Collection </span>
            </div>
          </div>

          <div className="slide">
            <img src="src\assets\carousell_images\img-2.jpg" />
            <div className="overlay">
              <span className="gradient-text"> Crafted for Precision. <br/> Designed for Style.</span>
            </div>
          </div>

          <div className="slide">
            <img src="src\assets\carousell_images\img-3.jpg" />
            <div className="overlay">
              <span className="gradient-text">Timeless Elegance on Your Wrist. <br /> Start Shopping Today</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
