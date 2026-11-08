import React from 'react'

const Card = (props) => {

       console.log(props.img)
  return (

 

<div className="card">


<img src={props.img} alt="User" />

    <h1>{props.user},{props.age}</h1>


     <p>Component means a small, reusable piece of a website.

In simple words, when we divide a website into small parts, each part is called a Component in React.</p>

<button className="button">Profile </button>
   </div>

    
    
  )
}

export default Card