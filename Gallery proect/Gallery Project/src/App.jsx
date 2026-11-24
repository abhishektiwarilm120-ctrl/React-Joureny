import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './component/Card'

const App = () => {


const [userdata,setUserData]=useState([])
const [index,setindex]=useState(1)

async function getData(){


const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

setUserData(response.data)
console.log(response.data)

}

useEffect(function(){
  getData()
},[index])


let printUserData ="Data Not Avaliable"

if(userdata.length>0){
  printUserData= userdata.map(function(elem, idx){
    return (
    
    <div>
     <Card elem={elem} idx={idx}/>
    </div>
    )
   
  })
}




  return (
    <div className='bg-black h-screen overflow-auto text-white'>

{/* <button 
onClick={()=>{
  getData()
}}


className='bg-green-600 text-white px-3 py-2 rounded m-4 active:scale-95'>
   Get Data
    </button> */}




<div className='flex flex-wrap gap-3 '>
<h1 className='fixed'>{index}</h1>
  {printUserData}
</div>

<div className='flex justify-center gap-6 r items-center p-4'>

<button 

onClick={
 ()=>{
  if(index>1){
    setindex(index-1)
  }
}
}
style={{opacity:index===1?0.5:1}}
className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded'>Prev



</button>

<h4>Page{index}</h4>
<button 
onClick={
()=>{


  setindex(index+1)
}
}

className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 px-4 py-2 font-semibold rounded'          >Next</button>

</div>

    </div>
  )
}

export default App