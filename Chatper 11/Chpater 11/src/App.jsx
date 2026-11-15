import React, { useState } from 'react'

const App = () => {

function click(e){
 e.preventDefault()
  console.log("form submit by",title)
  subtitle('')
}


const [title,subtitle]=useState('')




  return (
    <div>

<form>
<input type="text" placeholder='Enter your name'

value={title}
onChange={(e)=>{
  subtitle(e.target.value)
}}/>

<button onClick={(e)=>{
  click(e)
}}>Click Me</button>

</form>






    </div>
  )
}

export default App