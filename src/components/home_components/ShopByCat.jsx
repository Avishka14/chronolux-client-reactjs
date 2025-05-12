import React from 'react'
import './HomeComponents.css'
const callouts = [
  {
    key :'1',
    description: "Men's Collection",
    imageSrc: 'src/assets/home-img/shop-by/mens.jpg',
    href: '#',
  },
  {
    key :'2',
    description: "Woman's Collection",
    imageSrc: 'src/assets/home-img/shop-by/womans.jpg',
    href: '#',
  },
   {
    key :'3',
    description: "Unisex Collection",
    imageSrc: 'src/assets/home-img/shop-by/unisex.jpg',
    href: '#',
  },
]


export default function ShopByCat() {
  return (
  <div className="flex items-center justify-center ">
  <div className="w-full max-w-7xl">
    <div className="mx-auto py-12 sm:py-24 md:py-24 lg:py-24">
      <h2 className=" discover-h2">Discover</h2>

      <div className=" grid gap-y-12 md:grid-cols-3 md:gap-x-6 img-div-discover">
        {callouts.map((callout) => (
          <div key={callout.key} className="group relative img-discover">
            <img
              alt={callout.imageAlt}
              src={callout.imageSrc}
              className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
            />
            <p className="discover-p">{callout.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>



  )
}
