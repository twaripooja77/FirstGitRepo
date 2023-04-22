import React, { useReducer } from 'react'
import { Reducer } from 'react';
import Component1 from './Component1';

const initialState={count:0};
const reducer=(state,action)=>{
console.log(action,"action");
switch(action.type){
    case "increment":
        return{count:state.count+1};
        case "decrement":
        return{count:state.count-1};
        case "reset":
        return{count:0};
        default:
        throw new Error();
}
}

const Reducerhook = () => {
const[state, dispatch]=useReducer(reducer, initialState);

console.log(state,"state");
const handleIncrement=()=>{
    //dispatch increment action
    dispatch({type:"increment"});
}
const handleDecrement=()=>{
     //dispatch increment action
    dispatch({type:"decrement"});
}
const handleReset=()=>{
    //dispatch increment action
   dispatch({type:"reset"});
}
  return (
    <div>
        <p>Count:{state.count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <Component1/>
    </div>
  )
}

export default Reducerhook;