import React from "react";
import "../../Routes.css";

const products = [
  {
    id: 1,
    name: "Rolex Submariner Date",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Rolex Submariner Date.jpg",
    originalPrice: "$10,250",
    offerPrice: "$9,800",
    color: "Rolex",
  },
  {
    id: 2,
    name: "Omega Speedmaster Moonwatch Professional",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/Omega Speedmaster Moonwatch Professional.jpg",
    originalPrice: "$7,000",
    offerPrice: "$6,800",
    color: "Omega",
  },
  {
    id: 3,
    name: "Audemars Piguet Royal Oak Selfwinding",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/Audemars Piguet Royal Oak Selfwinding.jpg",
    originalPrice: "$35,000",
    offerPrice: "$33,800",
    color: "Audemars Piguet",
  },
  {
    id: 4,
    name: "Patek Philippe Nautilus 5711",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/Patek Philippe Nautilus 5711.jpg",
    originalPrice: "$120,000",
    offerPrice: "$118,800",
    color: "Patek Philippe",
  },
  {
    id: 5,
    name: "Cartier Tank Must",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Cartier Tank Must.jpg",
    originalPrice: "$3,000",
    offerPrice: "$2,800",
    color: "Cartier",
  },
  {
    id: 6,
    name: "TAG Heuer Monaco Calibre 11",
    href: "#",
    imageSrc:
      "src/assets/home-img/best-selling/TAG Heuer Monaco Calibre 11.jpg",
    originalPrice: "$6,550",
    offerPrice: "$6,000",
    color: "TAG Heuer",
  },
  {
    id: 7,
    name: "Hublot Big Bang Unico",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Hublot Big Bang Unico.png",
    originalPrice: "$21,000",
    offerPrice: "$20,800",
    color: "Hublot",
  },
  {
    id: 8,
    name: "Tissot PRX Powermatic 80",
    href: "#",
    imageSrc: "src/assets/home-img/best-selling/Tissot PRX Powermatic 80.jpg",
    originalPrice: "$695",
    offerPrice: "$695",
    color: "Tissot",
  },
];

export default function Shop_Offers() {
  return (
    <div>
      <div className="latest-arrival-container flex justify-center">
        <div className="bg-white w-full max-w-7xl">
          <div className="mx-auto px-4 ">
            <h2 className="latest-heading">Offers Available </h2>

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
                    <div className="text-sm text-right">
                      <p className="line-through text-gray-500">
                        {product.originalPrice}
                      </p>
                      <p className="font-bold text-red-600">
                        {product.offerPrice}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
