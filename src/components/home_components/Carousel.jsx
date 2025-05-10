import React from "react";
import "./HomeComponents.css";


export default function Carousel() {
  return (
    <div>
      <div className="carousel-body">
        <div className="carousel">
          <div className="slides">
            <div className="slide">
              <img src="src\assets\carousell_images\img-1.jpg" />
              <div className="overlay">
                <h1>Experience</h1>
                <h3>The Magic Of</h3>
                <h2>Watches!</h2>
              </div>
            </div>

            <div className="slide">
              <img src="src\assets\carousell_images\img-2.jpg" />
              <div className="overlay">
                <h1>Largest</h1>
                <h3>One Tap Buy</h3>
                <h2>Platform!</h2>
              </div>
            </div>

            <div className="slide">
              <img src="src\assets\carousell_images\img-3.jpg" />
              <div className="overlay">
                <h1>Timeless</h1>
                <h3>Elegence in Your</h3>
                <h2>Wrist!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
