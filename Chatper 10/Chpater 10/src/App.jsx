import React from 'react'

const App = () => {

function click(e){
 e.preventDefault()
  console.log("form submit")
}


  return (
    <div>

<form>
<input type="text" placeholder='Enter your name'/>

<button onClick={(e)=>{
  click(e)
}}>Click Me</button>

</form>






    </div>
  )
}

export default App