import React from 'react'
import { ChevronDown } from 'lucide-react';



const Card = (props) => {
  return (
    

<div className="card">



<div className="img">

 {/* <img
          src="https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Nature"
        /> */}


 <img
          src={props.img}
          alt="Nature"
        />






</div>

<div className="data">

<p className='one'>{props.name}</p>
<p>{props.companyname},</p>
<p className='two'>{props.post}</p>


</div>

<div className="icon">
  <ChevronDown />

</div>
  

 








</div>

  )
}

export default Card