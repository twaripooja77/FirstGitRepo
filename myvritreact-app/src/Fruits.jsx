import React from 'react'
import ChildList from './ChildList'
import { useState } from 'react'

const Fruits = () => {
  const[isAuthenticated, setIsAuthenticated]=useState(true);
  console.log(isAuthenticated,"isAuthenticated")
    const fruits=[
      
        { id:1, name:"papaya"},
        { id:2, name:"apple"},
        { id:3, name:"guava"}
    ]
    const handleState=()=>{
      setIsAuthenticated(!isAuthenticated);
    }
   
  return (
    <div>
        {/* <ul>
        {fruits.map((fruit)=>(
            <ChildList data={fruit.name} key={fruit.id}/>
        )
        
        )}
        </ul> */}

        <p>{isAuthenticated?"Boolean is True":"Boolean is not True"}</p>
        <button onClick={handleState}>Change State</button>
       
    </div>
  )
}

export default Fruits