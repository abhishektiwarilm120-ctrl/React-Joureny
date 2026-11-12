import React from 'react'

import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='bg-red-600 h-full w-80 rounded-4xl overflow-hidden relative   shrink-0 '>
        

      {/* <img  className='h-full w-full object-cover' src='https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' alt='profile'/> */}



      <img  className='h-full w-full object-cover' src={props.img} alt='profile'/>






<RightCardContent  color={props.color}   id={props.id}   tag={props.tag}/>



        </div>







  )
}

export default RightCard