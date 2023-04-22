import React, {useState, useEffect, useContext, memo} from 'react'
import Component2 from './Component2'

const Component1 = ({user}) => {
    console.log(user,"user")
    console.log("i am runnig")
  return (
    <div>
      Component1
        {/* <Component2 user={user}/> */}
        <p>Hello {user}</p>
        
    </div>
  )
}

export default memo(Component1)