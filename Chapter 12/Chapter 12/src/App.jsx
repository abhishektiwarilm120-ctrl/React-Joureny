import React from 'react'

const App = () => {
  
  localStorage.setItem('user','man')
   localStorage.setItem('age','38')

localStorage.removeItem('user')


  const user= localStorage.getItem('user')

console.log(user)



const us={
  name:"jack",
  age:89,
  city:"benglauro"
}


localStorage.setItem('usr',JSON.stringify(us))


const usr= JSON.parse(localStorage.getItem('usr'))


console.log(usr)

  return (

    <div>



    </div>
  )
}

export default App