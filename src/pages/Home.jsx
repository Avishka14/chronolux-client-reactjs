import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/home_components/Carousel'
import './Home.css'
import Brands from '../components/home_components/Brands'

export default function Home() {
  return (
    <div className="page-container">
       <Navbar/>
       <Carousel/>
       <Brands/>
    </div>
  )
}
