import React, { useEffect, useState } from 'react'

const App = () => {

const [count,setCount]=useState(0)


useEffect(()=>{
  console.log("hello")
},[])


function updatenum(){
  setCount(count+1)
}




  return (
    <div>

<h1>Button was clicked {count} time</h1>
<button onClick={updatenum}>update num</button>

    </div>
  )
}

export default App