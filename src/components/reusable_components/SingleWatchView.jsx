import React from "react";
import Breadcrumb from "./BreadCrumb";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BestSelling from "../home_components/BestSelling";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useParams } from "react-router-dom";
import {
  watchBrands,
  genderOptions,
  bestSellingWatches,
  latestArrivals,
  products,
  dailyDeals,
  firstPurchaseOffer,
  offeredWatches,
} from "./WatchData";

function SingleWatchView() {
  const allWatches = [
    ...watchBrands.flatMap((brand) => brand.watches),
    ...genderOptions.flatMap((option) => option.watches),
    ...bestSellingWatches.flatMap((watch) => watch.watches),
    ...latestArrivals.flatMap((watch) => watch.watches),
    ...products.flatMap((product) => product.watches),
    ...dailyDeals.flatMap((deal) => deal.watches),
    ...firstPurchaseOffer.flatMap((offer) => offer.watches),
    ...offeredWatches.flatMap((offer) => offer.watches),
  ];

  const { id } = useParams();
  const product = allWatches.find((watch) => watch.id === parseInt(id));

  if (!product) return <div>Product Not Found !! </div>;

  const brandName = product.name;

  const path = [{ label: brandName, url: null }];

  return (
    <>
      <Navbar />
      <Breadcrumb path={path} />

      <div className="singleView-Container">
        <div className="singleView-price-container">
          <div className="singleView-Icon">
            <span>
              <FavoriteBorderOutlinedIcon />
            </span>
            <span>
              <ShoppingCartOutlinedIcon />
            </span>
          </div>

          <div>
            <div className="singleView-hr">
              <hr />
            </div>

            <h2 className="singleView-brand">{product.color}</h2>

            <h1 className="singleView-title">{product.name}</h1>

            <div className="singleView-price">
              <span className="price-span">Price :{product.price}</span>
            </div>

            <div className="singleView-originalPrice">
              {product.originalPrice ? (
                <span className="orignialPrice-span">
                  Original Price :{product.originalPrice}
                </span>
              ) : null}
            </div>

            <p className="singleView-description"> {product.description} </p>

            <button className="singleView-button">Check Out</button>
          </div>
        </div>

        <div className="singleView-img-container">
          <img src={product.imageSrc} alt="Everyday Ruck Snack" />
        </div>
      </div>
      <BestSelling />
      <Footer />
    </>
  );
}

export default SingleWatchView;
