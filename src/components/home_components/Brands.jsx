import React from "react";

export default function Brands() {
  return (
    <div>
      <div className="brands-container">
        <div className="brands-heading">
          <h1>Shop You'r Favourite Brands!</h1>
        </div>

        <div className="brand-names-c">
          <ul className="brand-ul">
            <li>Rolex</li>
            <li>Patek Philippe</li>
            <li>Audemars Piguet</li>
            <li>Hublot</li>
            <li>Richard Mille</li>
            <li>Omega</li>
            <li>Breitling</li>
            <li>Panerai</li>
            <li>Jaeger-LeCoultre</li>
            <li>Breguet</li>
            <li className="brand-h1"> & More !</li>
          </ul>
        </div>

        <div className="brand-watch-photos-container">
            
            <div className="watch-p-c">
                <img src="src\assets\home-img\rolex.jpg"  />
            </div>

            <div className="watch-p-c">
                <img src="src\assets\home-img\patek-philippe.jpg"  />
            </div>

            <div className="watch-p-c">
                <img src="src\assets\home-img\audemars.jpg"  />
            </div>

            <div className="watch-p-c">
                <img src="src\assets\home-img\hublot.jpg"  />
            </div>
   
        </div>

        <div className="brands-heading-second">
          <h1 className="h1-second">Start Shopping Now!</h1>
          <div className="sign-in-container">
          <h3 className="h3-second">Log In or Create a Account to Get Started!</h3>
          <a href="" className="brands-btn-log-in">Log In</a>
          <a href="" className="brands-btn-sign-in">Create Account</a>
          </div>
        </div>

        <div style={{ width: "90vw", textAlign: "center", padding:"15px" }}>
          <hr />
        </div>

      </div>
    </div>
  );
}
