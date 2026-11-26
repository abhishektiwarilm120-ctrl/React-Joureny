import React from 'react'
import {Link} from 'react-router-dom'
const Product = () => {
  return (
    <div>

<div className='text-xl font-bold gap-3 justify-center flex'>
  <Link to="/product/men">Men</Link>
  <Link to="/product/women">Women</Link>
</div>


        <h1>Product</h1>
    </div>
  )
}

export default Product