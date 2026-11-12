import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 h-[90vh] flex gap-5 items-center'>
 
  <LeftContent/>
 <RightContent users={props.users}/>
       
       
        
    </div>
  )
}

export default Page1Content