import React, { useState, useEffect, useContext } from 'react'
import { createContext } from 'react';
import Component1 from './Component1';
import Component3 from './Component3';
export const UserContext=createContext();
const ContextHook = () => {
    const [user, setUser]=useState("Pooja Tiwari");
    console.log(user,"user prop")
    const handleUser=({target:{value}})=>{
        setUser(value);
        
    }
  return (
    <div>
        <input type="text" onChange={handleUser} value={user}/>
        {/* <Component1 user={user}/> */}
        <UserContext.Provider value={user}>
            <Component1/>         
              {/* Component1 bhitra jati pani children xa sabaile access garna milxa  */}
        </UserContext.Provider>
    </div>
  )
}

export default ContextHook