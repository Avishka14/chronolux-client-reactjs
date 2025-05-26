import React from "react";
import { products } from "../../../reusable_components/WatchData";
import WatchGrid from "../../../reusable_components/WatchGrid";

export default function Watch_Stock() {
  return (
    <div>
      <div className="watch-shop-container">
        <div className="flex justify-center">
          <div className="bg-white " style={{ margin: "40px" }}>
            <div className="mx-auto px-4 ">
              <h2 className="latest-heading">Choose a Best One  </h2>
               {products.map((brand) =>(
                     <WatchGrid key={brand.name} brand={brand}/>
               )) }
             
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
