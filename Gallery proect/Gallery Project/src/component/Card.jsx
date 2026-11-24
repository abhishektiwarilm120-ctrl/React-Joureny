import React from 'react'

const Card = (props) => {
  return (
    <div>

  <a href={props.elem.url} target='_blank'>
       <div className='h-40 w-44   mt-6 ml-7'>
      <img  className='h-full object-cover  rounded-2xl'    src={props.elem.download_url
}></img>
    </div>


<h2 className='font-bold text-xl'>{props.idx+1}. { props.elem.author}</h2>
</a>


    </div>
  )
}

export default Card