import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from './ContextHook'

const Component3 = () => {
    const user=useContext(UserContext);
    // console.log(user,"user")
  return (
    <div>
        Component3
        <p>{user}</p>
    </div>
  )
}

export default Component3