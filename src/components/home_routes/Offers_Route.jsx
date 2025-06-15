import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  offeredWatches,
  firstPurchaseOffer,
  dailyDeals,
} from "../reusable_components/WatchData";
import { Link } from "react-router-dom";

const watchData = [offeredWatches, firstPurchaseOffer, dailyDeals];

export default function Offers_Route() {
  return (
    <div>
      <Navbar />
      <div className="latest-arrival-container flex justify-center">
        <div className="bg-white" style={{ margin: "40px" }}>
          <div className="mx-auto px-4">
            {watchData.map((sectionArray, index) => {
              const section = sectionArray[0];
              return (
                <div key={index}>
                  <h2 className="latest-heading mb-4">{section.name}</h2>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 product-list-latest">
                    {section.watches.map((watch) => (
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
                            
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0"
                                />
                                {watch.name}
                            
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {watch.color}
                            </p>
                          </div>
                          <div className="text-sm text-right">
                            <p className="line-through text-gray-500">
                              {watch.originalPrice}
                            </p>
                            <p className="font-bold text-red-600">
                              {watch.offerPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
