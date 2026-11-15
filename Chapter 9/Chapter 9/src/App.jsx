import React, { useState } from 'react'

const App = () => {

let [num,setnum]= useState({user:'Abhi',age:23})

function Change(){
  const newNum = {...num};

newNum.user="Aman"
newNum.age=90
setnum(newNum)

}


  return (
    <div>

<h1>{num.user},{num.age}</h1>
      <button onClick={Change}>Click</button>
    </div>
  )
}

export default App