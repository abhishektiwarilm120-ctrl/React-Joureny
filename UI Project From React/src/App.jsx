import React from 'react'
import Section1 from "./Component/Section 1/Section1"
import Section2 from "./Component/Section 2/Section2"

const App = () => {

const user= [
{
img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
intro:'',
color:'blue',
tag:'Satisfed'
},

{
img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
intro:'',
color:'orange',
tag:'UnderBrek'
},


{
img:'https://plus.unsplash.com/premium_photo-1661594668193-3f105ef4ce8d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
intro:'',
color:'purple',
tag:'UnderWork'
}


]



  return (
    <div>


<div>
<Section1 users={user}/>

</div>



    </div>
  )
}

export default App