import React from "react";
import "./Shop_Component.css";

const products = [
  {
    id: 1,
    name: "Rolex Submariner Date",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Rolex Submariner Date.jpg",
    price: "$10,250",
    color: "Rolex",
  },
  {
    id: 2,
    name: "Omega Speedmaster Moonwatch Professional",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/Omega Speedmaster Moonwatch Professional.jpg",
    price: "$7,000",
    color: "Omega",
  },
  {
    id: 3,
    name: "Audemars Piguet Royal Oak Selfwinding",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/Audemars Piguet Royal Oak Selfwinding.jpg",
    price: "$35,000",
    color: "Audemars Piguet",
  },
  {
    id: 4,
    name: "Patek Philippe Nautilus 5711",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/Patek Philippe Nautilus 5711.jpg",
    price: "$120,000",
    color: "Patek Philippe",
  },
  {
    id: 5,
    name: "Cartier Tank Must",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Cartier Tank Must.jpg",
    price: "$3,000",
    color: "Cartier",
  },
  {
    id: 6,
    name: "TAG Heuer Monaco Calibre 11",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/TAG Heuer Monaco Calibre 11.jpg",
    price: "$6,550",
    color: "TAG Heuer",
  },
  {
    id: 7,
    name: "Hublot Big Bang Unico",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Hublot Big Bang Unico.png",
    price: "$21,000",
    color: "Hublot",
  },
  {
    id: 8,
    name: "Tissot PRX Powermatic 80",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Tissot PRX Powermatic 80.jpg",
    price: "$695",
    color: "Tissot",
  },
];

export default function Mens_Watches() {
  return (
    <div>
      <div className="mens-watches-container">
        <div className="flex justify-center">
          <div className="bg-white w-full max-w-7xl">
            <div className="mx-auto px-4 ">
              <h2 className="latest-heading">Mens Watches </h2>

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
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
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
      </div>
    </div>
  );
}
