import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/home_components/Carousel'
import './Home.css'


export default function Home() {
  return (
    <div className="page-container">
       <Navbar/>
       <Carousel/>

    </div>
  )
}
