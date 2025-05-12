import React from "react";
import "./HomeComponents.css";

const products = [
  {
    id: 1,
    name: "Rolex Oyster Perpetual 41",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Rolex Oyster Perpetual 41.jpg",
    price: "$6,400",
    color: "Rolex",
  },
  {
    id: 2,
    name: "Omega Speedmaster Moonwatch Professional",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Omega Speedmaster Moonwatch Professional.jpg",
    price: "$7,000",
    color: "Omega",
  },
  {
    id: 3,
    name: "Audemars Piguet Royal Oak Selfwinding",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Audemars Piguet Royal Oak Selfwinding.png",
    price: "$35,000",
    color: "Audemars Piguet",
  },
  {
    id: 4,
    name: "Patek Philippe Calatrava 6119R",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Patek Philippe Calatrava 6119R.jpg",
    price: "$31,940",
    color: "Patek Philippe",
  },
  {
    id: 5,
    name: "Cartier Santos de Cartier Large Model",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Cartier Santos de Cartier Large Model.jpg",
    price: "$8,450",
    color: "Cartier",
  },
  {
    id: 6,
    name: "Tag Heuer Carrera Chronograph 42mm",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Tag Heuer Carrera Chronograph 42mm.jpg",
    price: "$5,750",
    color: "TAG Heuer",
  },
  {
    id: 7,
    name: "Hublot Classic Fusion Titanium 42mm",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Hublot Classic Fusion Titanium 42mm.jpg",
    price: "$8,200",
    color: "Hublot",
  },
  {
    id: 8,
    name: "Breitling Navitimer B01 Chronograph 43",
    href: "#",
    imageSrc:
      "src/assets/home-img/latest-arrivals/Breitling Navitimer B01 Chronograph 43.png",
    price: "$9,000",
    color: "Breitling",
  },
];

export default function LatestArrivals() {
  return (
  <div className="latest-arrival-container flex justify-center">
  <div className="bg-white w-full max-w-7xl">
    <div className="mx-auto px-4 ">
      <h2 className="latest-heading">Latest Arrivals!</h2>

      {/* Responsive grid: 2 cols on small, 4 on md+ */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 product-list-latest">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}
