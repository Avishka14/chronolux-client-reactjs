import React from "react";
import "./Accessories.css"; 

export default function Accessories_Grid({ brand, children }) {
  return (
    <div>
      <div className="heading-div">{children}</div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 img-cont-ac">
        {brand.accessorie.map((accessorie) => (
          <div key={accessorie.id} className="group relative ">
            <img
              src={accessorie.imageSrc}
              alt={brand.name}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm">
                </h3>
                <p className="mt-1 text-sm text-gray-500">{accessorie.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
