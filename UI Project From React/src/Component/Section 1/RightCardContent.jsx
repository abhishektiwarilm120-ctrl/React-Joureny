import React from 'react'
import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
  <div className='absolute  top-0 left-0 h-full w-full flex flex-col p-6 justify-between'>

<h2 className='bg-white rounded-full flex justify-center items-center h-10 w-10 font-bold'>{props.id+1}</h2>
<div>
    <p className='text-black mt-40 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum hic tempora praesentium libero assumenda.</p>
</div>

<div className='flex justify-between'>
    <button style={{background:props.color}} className=' text-white rounded-full px-5 py-4'>{props.tag}</button>
    <button className='bg-blue-600 text-white rounded-full px-5 py-3'><MoveRight size={16} /></button>
</div>


</div>

  )
}

export default RightCardContent