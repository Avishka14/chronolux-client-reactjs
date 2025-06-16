import React from "react";
import getWatch from "./WatchFilter";
import { Link } from "react-router-dom";

const FilteredWatchView = ({brandName}) => {
  const watches = getWatch(brandName.toLowerCase());

  return (
    <div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 product-list-latest">
        {watches.map((watch) => (
           <Link to={`/proudctview/${watch.id}`} key={watch.id}>
          <div key={watch.id} className="group relative">
            <img
              src={watch.imageSrc} 
              alt={watch.name}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm">
                 
                </h3>
                <p className="mt-1 text-sm text-gray-500">{watch.name}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{watch.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilteredWatchView;
