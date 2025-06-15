import React from 'react'
import {Link} from 'react-router-dom';

export default function WatchGrid({ brand , children }) {
  return (
    <div>
      <div className="logo-div">
        {children}
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 product-list-latest">
        {brand.watches.map((watch) => (
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
             
                    <span aria-hidden="true" className="absolute inset-0" />
                    {watch.name}
                 
                </h3>
                <p className="mt-1 text-sm text-gray-500">{brand.name}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{watch.price}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
