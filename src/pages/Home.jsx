import React from "react";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/home_components/Carousel";
import "./Home.css";
import Brands from "../components/home_components/Brands";
import LatestArrivals from "../components/home_components/LatestArrivals";
import ShopByCat from "../components/home_components/ShopByCat";
import BestSelling from "../components/home_components/BestSelling";
import Featured from "../components/home_components/Featured";
import Footer from "../components/footer/Footer";
import ShopRoute from "../components/home_routes/Shop_Route";
import BrandRoute from "../components/home_routes/Brands_Route";
import AccessoriesRoute from "../components/home_routes/Accessories_Route";
import OffersRoute from "../components/home_routes/Offers_Route";
import AboutUsRoute from "../components/home_routes/AboutUs_Route";
import ContactRoute from "../components/home_routes/Contact_Route";
import JoinUsRoute from "../components/home_routes/JoinUs_Route";
import Brands_SingleView from "../components/home_components/Brands_SingleView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleWatchView from "../components/reusable_components/SingleWatchView";
import { Link } from "react-router-dom";
import AccessoriesView from "../components/home_routes/route_components/Accessories_Route/AccessoriesView";
import Account from "./Account/Account";
import LogIn from "./Account/LogIn";
import SignIn from "./Account/SignIn";

export default function Home() {
  return (
    <div className="page-container">

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar>
                  <nav className="nav-small">
                    <div className="small-nav-heading">
                      <p>
                        Welcome to ChronoLux ! Your Ultimate Luxury Watch
                        Partnter !
                      </p>
                    </div>

                    <div className="small-nav-end">
                      <ul>
                        <li>
                          {" "}
                          <Link to="/aboutus"> About Us </Link>{" "}
                        </li>
                        <li>
                          {" "}
                          <Link to="/contact"> Contact </Link>{" "}
                        </li>
                        <li>
                          {" "}
                          <Link to="/joinus"> Join Us </Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </nav>
                </Navbar>
                <Carousel />
                <Brands />
                <LatestArrivals />
                <ShopByCat />
                <BestSelling />
                <Featured />
                <Footer />
              </>
            }
          />
          <Route path="/shop" element={<ShopRoute />} />
          <Route path="/brand" element={<BrandRoute />} />
          <Route path="/accessories" element={<AccessoriesRoute />} />
          <Route path="/offers" element={<OffersRoute />} />
          <Route path="/aboutus" element={<AboutUsRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/joinus" element={<JoinUsRoute />} />
          <Route path="/proudctview/:id" element={<SingleWatchView />} />
          <Route
            path="/brands_singleview/:id"
            element={<Brands_SingleView />}
          />
          <Route path="/accessoriesview" element={<AccessoriesView />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </Router>
    </div>
  );
}
