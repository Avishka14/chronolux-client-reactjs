import React from "react";
import "./HomeComponents.css";
import { latestArrivals } from "../reusable_components/WatchData";
import WatchGrid from "../reusable_components/WatchGrid";

export default function LatestArrivals() {
  return (
    <div className="latest-arrival-container flex justify-center">
      <div className="bg-white " style={{margin:'40px'}}>
        <div className="mx-auto px-4">
          <h2 className="latest-heading">Latest Arrivals!</h2>
          {latestArrivals.map((brand) => (
            <WatchGrid key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
}
