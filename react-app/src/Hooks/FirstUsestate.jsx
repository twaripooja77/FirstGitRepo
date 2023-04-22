import React from 'react'
import { useState } from 'react'

const FirstUsestate = () => {
    const[isAuthenticated,setIsauthenticated]=useState(true);
     const handlestate=()=>{
        setIsauthenticated(!isAuthenticated);
     }
  return (
    <>
    <div>{isAuthenticated? "Hello": "Not Hello"}</div>
    <button onClick={handlestate}>Change State</button>
    </>
    

  )
}

export default FirstUsestate