import React, { useState } from 'react'
import img from './assets/Notes img.png'

const App = () => {

const submitBtn=(e)=>{
  e.preventDefault()

const CopyTask=[...task]

CopyTask.push({title,detalis})
setTask(CopyTask)

console.log(CopyTask)





  console.log("titlt=",title)
  console.log("detalis=",detalis)
  setTitle('')
  setDetalis('')





  
}

const [title , setTitle]=useState('')
const [detalis,setDetalis]=useState('')
const[task,setTask]=useState([])

const DeleteNote=(idx)=>{
  console.log('notes delete')

const copyTask=[...task]
copyTask.splice(idx,1)
setTask(copyTask)

}



  return (
    <div className='bg-black h-screen text-white lg:flex'>


<form    onSubmit={(e)=>{ 
  submitBtn(e)
}}       className='flex items-start p-10 gap-3 flex-col lg:w-1/2'>



<h1 className='font-bold text-3xl'>Add notes</h1>

{/* 
Phela input */}
<input className='px-3 py-5  w-full border-2 rounded' type="text" placeholder="Enter Your Heading"

value={title}

onChange={(e)=>{
  setTitle(e.target.value)
}}


/>

{/* 

Detal input */}
<textarea  className='px-3 py-5 h-34   w-full border-2 rounded'   type="text" placeholder="writing Detalis"

value={detalis}
onChange={(e)=>{
 setDetalis(e.target.value)
}}





/>
<button  className= 'bg-white text-black active:bg-gray-400 active:scale-95  w-full   px-5 py-2 border-2 rounded-xl'>Add Notes</button>






</form>



<div className="p-10  lg:w-1/2  gap-5 lg:border-l-2">


<h1 className='font-bold text-3xl'>Your notes</h1>


<div className='flex-wrap flex gap-5 mt-6 overflow-auto h-[90%]'>


{task.map(function(elem,idx){
  // return <div className='h-32 rounded-2xl bg-white w-40'> </div>


  return <div key={idx}   className='h-40 rounded-2xl bg-white w-38 p-4  bg-cover bg-center  bg-[url()]   flex flex-col'>
    <div>
    <h3 className='text-xl text-black font-bold leading-tight'>{elem.title} </h3>
    <p className='  leading-tight mt-3 font-medium text-gray-500 '>{elem.detalis}</p>
   </div>


   <button  onClick={()=>{
   DeleteNote(idx)
   }}           className='text-white bg-red-500 rounded font-bold cursor-pointer w-full   active:scale-95  text-xl  mt-auto'> Delete</button>
     </div>



//  <button className='text-white bg-red-500 rounded font-bold cursor-pointer w-1/2'>Delete</button/>


})}




{/* <div className='h-32 rounded-2xl bg-white w-40'> </div>

<div className='h-32 rounded-2xl bg-white w-40'> </div>

<div className='h-32 rounded-2xl bg-white w-40'> </div> */}






</div>




</div>


    </div>
  )
}

export default App







