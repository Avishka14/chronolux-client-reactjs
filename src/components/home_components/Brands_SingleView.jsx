import React from 'react';
import { brands } from './brands-data/Brands_Data';
import { useParams } from 'react-router-dom';

function Brands_SingleView() {
  const {id} = useParams();
  const brand = brands[id];

  if (!brand) return <p> Brand not Available</p>
  return (
    <div>
      <h2>{brand.brandName}</h2>
    </div>
  )
}

export default Brands_SingleView