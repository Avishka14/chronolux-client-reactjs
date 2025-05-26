import React from 'react'
import { genderOptions } from '../../../reusable_components/WatchData';
import WatchGrid from '../../../reusable_components/WatchGrid';
import './Shop_Route.css';

export default function ShopByGender() {
  return (
   <div className="latest-arrival-container flex justify-center">
         <div className="bg-white " style={{margin:'40px'}}>
           <div className="mx-auto px-4">
             <h2 className="latest-heading">Shop By Gender</h2>
             {genderOptions.map((brand) => (
               <WatchGrid key={brand.name} brand={brand} >
                   <h1 className="shopbyGender-h1">{brand.name}</h1>
              </WatchGrid>
             ))}
           </div>
         </div>
       </div>
  )
}
