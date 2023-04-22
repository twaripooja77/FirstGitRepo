import React, { useState } from 'react'

const Counter2 = () => {
    const[count,setcount]=useState(0);

    const handleIncrement=()=>{
        setcount((count)=>count+1);
        setcount((prevValue=>(prevValue+1)))
    }
    const handleDecrement=()=>{
        setcount((count)=>count-1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <div>{count}</div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter2