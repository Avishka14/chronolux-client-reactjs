import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/home_components/Carousel'
import './Home.css'
import Brands from '../components/home_components/Brands'
import LatestArrivals from '../components/home_components/LatestArrivals'
import ShopByCat from '../components/home_components/ShopByCat'
import BestSelling from '../components/home_components/BestSelling'
import Featured from '../components/home_components/Featured'

export default function Home() {
  return (
    <div className="page-container">
       <Navbar/>
       <Carousel/>
       <Brands/>
       <LatestArrivals/>
       <ShopByCat/>
       <BestSelling/>
       <Featured/>
    </div>
  )
}
