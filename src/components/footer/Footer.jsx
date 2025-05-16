import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-container'>
    
     <footer className="bg-gray-900 text-gray-400">
      <div className=" ">
        <div className="md:flex md:justify-between">
     
          <div className="mb-10 md:mb-0 md:max-w-md">
            <div className="flex items-center space-x-2 mb-4">
          
              
              <span className="text-white font-semibold text-lg">ChronoLux</span>
            </div>
            <p className="text-sm">
              Elevating your style through classic and modern timepieces.
            </p>

      
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
   
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              
                </svg>
              </a>
            </div>
          </div>

   
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Links</h3>
              <ul className="space-y-2">
                <li className="hover:text-white">  <Link to="/"> Home </Link></li>
                <li className="hover:text-white">  <Link to="/shop">   Shop </Link> </li>
                <li className="hover:text-white"> <Link to="/brand">   Brands </Link> </li>
                <li className="hover:text-white"> <Link to="/accessories">  Accessories </Link></li>
                <li className="hover:text-white"> <Link to="/offers"> Offers  </Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Discover</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Men's Watches</a></li>
                <li><a href="#" className="hover:text-white">Woman's Watches</a></li>
                <li><a href="#" className="hover:text-white">Unisex Watches</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li className="hover:text-white"> <Link to="/aboutus"> About Us </Link> </li>
                <li className="hover:text-white"><Link to="/contact"> Contact </Link> </li>
                <li className="hover:text-white"> <Link to ="/joinus" > Join Us </Link> </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Terms of service</a></li>
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white">License</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center footer-watermark ">
          <p >  © 2024 Designed By Avishka Chamod</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
