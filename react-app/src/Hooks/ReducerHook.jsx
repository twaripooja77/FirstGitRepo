import React, { useReducer, useState } from 'react'
import Component1 from './Component1';

const initialState={count:0}
function reducer(state ,action){
    switch(action.type){
        case "increment":
            return{count:state.count+1};
        case "decrement":
            return{count:state.count-1};
            case "reset":
                return{count:0}
        default:
            throw new Error();
    }
}
const ReducerHook = () => {
    const[state, dispatch]=useReducer(reducer, initialState)
    const [user, setUser]=useState("test")
    const handleIncrement=()=>{
        setUser("pooja")
        //dispatch increment action
        dispatch({type:"increment"})

    }
    const handleDecrement=()=>{
        //dispatch decrement action
dispatch({type:"decrement"})
    }
    const handleReset=()=>{
        dispatch({type:"reset"})
    }
  return (
    <div>
        <h1>Reducer Hook</h1>
        <p>Count is {state.count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <Component1 user={user}/>

    </div>
  )
}

export default ReducerHook