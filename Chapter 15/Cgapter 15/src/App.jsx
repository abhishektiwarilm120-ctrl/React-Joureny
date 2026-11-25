import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Component/navbar'



const App = () => {
  return (
    <div>


<Navbar/>





<div>





<Routes>
<Route path="/"     element={<Home/>}  />
<Route path="/about"     element={<About/>}  />
<Route path="/contact"     element={<Contact/>} />


</Routes>

</div>
    </div>
  )
}

export default App