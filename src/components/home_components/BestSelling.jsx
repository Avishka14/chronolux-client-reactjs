import React from "react";
import "./HomeComponents.css";
import { bestSellingWatches } from "../reusable_components/WatchData";
import WatchGrid from "../reusable_components/WatchGrid";

export default function BestSelling() {
  return (
    <div>
      <div className="latest-arrival-container flex justify-center">
        <div className="bg-white " style={{margin:'40px'}}>
          <div className="mx-auto px-4 ">
            <h2 className="latest-heading">Best Selling </h2>
            {bestSellingWatches.map((brand) => (
              <WatchGrid key={brand.name} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
