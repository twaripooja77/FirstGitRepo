import { React, useEffect, useState } from 'react';


export default function CounterApp() {
    const [counter, setCounter] = useState(0);
   
    
    const increase = () => {
      setCounter(count => count + 1);
      setCounter((prevValue)=>prevValue+1);
    };
   
 
    const decrease = () => {
      setCounter(count => count - 1);
    };
   
     
    const reset = () =>{
      setCounter(0)
    }
    useEffect(() => {
      document.title=`I am rendering ${counter} times`;
      console.log("i m running");
    },[counter]);
   
    return (
      <div className="counter">
        <h1>React Counter</h1>
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={increase}>+</button>
          <button className="control__btn" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }