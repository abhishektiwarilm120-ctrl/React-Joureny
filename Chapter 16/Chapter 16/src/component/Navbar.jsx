import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-8 bg-cyan-800'>


<h2>Total</h2>

<div className='flex gap-5'>




<Link  to="/"   >Home</Link>

<Link to="/about">About</Link>
<Link to="/Product">Product</Link>
<Link to="/course">Course</Link>
</div>





    </div>
  )
}

export default Navbar