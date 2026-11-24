
import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

async function Data(){
const response= await fetch('https://jsonplaceholder.typicode.com/posts/1')


const data= await response.json()

console.log(data)
}

const [data,setData]=useState([])

    const getData= async ()=>{

const response=   await axios.get('https://picsum.photos/id/237/200/300')

const result = await response.data


setData(result)
}




  return (
    <div>
      <button onClick={()=>{
        Data()
      }}>Get Data</button>


<div>


<button onClick={()=>{
  getData()
}}

>Second Data</button>


{data.map(function(){

return <h1>hello</h1>


})}



</div>



    </div>
  )
}

export default App