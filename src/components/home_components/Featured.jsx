import React from "react";
import "./HomeComponents.css";
import { watchBrands } from "../reusable_components/WatchData";
import WatchGrid from "../reusable_components/WatchGrid";

export default function Featured() {
  return (
    <div>
      <div className="latest-arrival-container flex justify-center">
        <div className="bg-white" style={{ margin: "40px" }}>
          <div className="mx-auto px-4">
            <h2 className="latest-heading">Featured Watches!</h2>
            {watchBrands.map((brand) => (
              <WatchGrid key={brand.name} brand={brand}>
                  <img src={brand.logo} alt={`${brand.name} logo`} />
              </WatchGrid>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
