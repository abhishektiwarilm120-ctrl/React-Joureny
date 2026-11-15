import React from 'react'

const App = () => {

const btnClicked= ()=>{
  console.log('function work')
}


  return (
    <div>


      <button onClick={btnClicked()}>Click Now</button>





<button onClick={function(){
  console.log("hello")
}}>Now Click</button>


<input onChange={function(elem){
  console.log(elem.target.value)
}}     type='text' placeholder='Enter Detalis'/>


<div className="box"  onMouseMove={(elem)=>{
console.log(elem.target)
}}    >

</div>




<div className="pages">

<div className="page1"> </div>
<div className="page2">  </div>
<div className="page3">  </div>
<div className="page4">  </div>







</div>









    </div>
  )
}

export default App