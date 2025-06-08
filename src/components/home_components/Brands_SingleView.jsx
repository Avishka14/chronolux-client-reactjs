import React from "react";
import "./HomeComponents.css";
import { brands } from "./brands-data/Brands_Data";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";
import Breadcrumb from "../reusable_components/BreadCrumb";
import FilteredWatchView from "../reusable_components/FilteredWatchView";

function Brands_SingleView() {
  const { id } = useParams();
  const brand = brands[id];
  const brandName = brand ? brand.brandName : "Brand Not Found";

  if (!brand) return <p> Brand not Available</p>;

  const path = [
    { label: "Brand", url: "/brand" },
    { label: brandName, url: null },
  ];

  return (
    <>
      <NavBar />
      <Breadcrumb path={path} />

      <div className=" bg-white first-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-custom">
          <div className="flex items-start justify-center  ">
            <div className="text-container-brand-single-view">
              <h2 className="brand-single-view-h2">
                Shop Your Favorite Brand!
              </h2>
              <p className="brand-name-heading-single-view">
                {brand.brandName}
              </p>
              <p className="brand-single-view-heading">{brand.title}</p>
              <p className="single-view-brand-description">
                {brand.description}
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center img-single-view">
            <img
              alt="Product screenshot"
              src={brand.coverImage}
              className="w-full h-auto max-w-[95%]  shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="product-container">
          <div className="bg-white">
            <div>
              <h2 className="latest-heading">{brandName} Watches!</h2>
              <FilteredWatchView brandName={brandName} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Brands_SingleView;
