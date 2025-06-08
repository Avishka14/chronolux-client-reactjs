import React from "react";
import { brands } from "./brands-data/Brands_Data";
import { Link } from "react-router-dom";

export default function Brands() {
  return (
    <div>
      <div className="brands-heading">
        <h1>Shop You'r Favourite Brands!</h1>
      </div>

      <div className="brands-container">
        <div className="brand-names-c">
          <ul className="brand-ul">
            {brands.map((brand) => (
              <li key={brand.id}>
                <Link to={`/brands_singleview/${brand.id}`}>
                {brand.brandName}</Link>
              </li>
            ))}
            <li className="brand-h1"> & More !</li>
          </ul>
        </div>

        <div className="brand-watch-photos-container">
          <div className="watch-p-c">
            <img src="\assets\home-img\rolex.jpg" />
          </div>

          <div className="watch-p-c">
            <img src="\assets\home-img\patek-philippe.jpg" />
          </div>

          <div className="watch-p-c">
            <img src="\assets\home-img\audemars.jpg" />
          </div>

          <div className="watch-p-c">
            <img src="\assets\home-img\hublot.jpg" />
          </div>
        </div>

        <div className="image-slider">
          <div className="slider-track">
            <div className="watch-p-c-slide">
              <img src="\assets\home-img\rolex.jpg" />
            </div>

            <div className="watch-p-c-slide">
              <img src="\assets\home-img\patek-philippe.jpg" />
            </div>

            <div className="watch-p-c-slide">
              <img src="\assets\home-img\audemars.jpg" />
            </div>

            <div className="watch-p-c-slide">
              <img src="\assets\home-img\hublot.jpg" />
            </div>
          </div>
        </div>

        <div className="brands-heading-second">
          <h1 className="h1-second">Start Shopping Now!</h1>
          <div className="sign-in-container">
            <h3 className="h3-second">
              Log In or Create a Account to Get Started!
            </h3>
            <a href="" className="brands-btn-log-in">
              Log In
            </a>
            <a href="" className="brands-btn-sign-in">
              Create Account
            </a>
          </div>
        </div>

        <div style={{ width: "90vw", textAlign: "center", padding: "15px" }}>
          <hr />
        </div>
      </div>
    </div>
  );
}
