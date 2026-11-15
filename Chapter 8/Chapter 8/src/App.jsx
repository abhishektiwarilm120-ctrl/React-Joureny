
import React, { useState } from 'react'



const App = () => {

let a=100

let [numA,setnum] =useState(8)


function ClickChange(){
  console.log("hello")
  setnum(67)
}





let [num , setincrease]=useState(0)


function increasenum(){
  
setincrease(num+1)
}

function decreasenum(){
setincrease(num-1)
}




  return (
    <div>
<p>Value of a is {numA}</p>
{/* 
<buton onClick={ClickChange}> Click me</buton> */}
<button onClick={ClickChange}    >Click now</button>














{/* 
//small project */}

<h1>Number increse and decrese Throgh usestate</h1>


<div className="div">

<h1>{num}</h1>
<button onClick={increasenum}>increse</button>
<button onClick={decreasenum}>decrease</button>


</div>
















    </div>
  )
}

export default App