import React from 'react'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'


const Navbar = () => {
  return (
    <div className='flex w-full items-center '>

<NavbarLeft/>

<div className="flex-1">

<NavbarRight/>

</div>
    </div>
  )
}

export default Navbar