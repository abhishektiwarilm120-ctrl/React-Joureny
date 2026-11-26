import React from 'react'
import Navbar from './component/Navbar'
import Fotter from './component/Fotter'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CoursesDetalis from './pages/CoursesDetalis'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

<Navbar/>

<Routes>
  
<Route path='/'   element={<Home/>}     />

<Route path='/about'   element={<About/>}     />

<Route path='/product'   element={<Product/>}     >

<Route path='men'   element={<Mens/>}     />
 <Route path='women'   element={<Women/>}     /> 


</Route>



<Route path='/course'   element={<Courses/>}     >

<Route path=':id' element={<CoursesDetalis/>}/>

</Route>


<Route path='*'   element={<Notfound/>}     />

</Routes>

<Fotter/>


    </div>
  )
}

export default App