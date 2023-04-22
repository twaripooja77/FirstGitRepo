import React, { useRef } from 'react'
import { useState, useEffect } from 'react'

const RefHook = () => {
    const [inputValue, setInputValue]=useState("");
    const count=useRef(0);
    const inputElement=useRef();  //dom access garna inputelement use bhako xa
    console.log(count,"count")

    const handleCount=()=>{
        // console.log(count);
        count.current= count.current+1;
        inputElement.current.focus();
        // alert(`You have click ${count.current} times`);
    }
    console.log(count,"testcount");
    console.log(inputElement,"iE");

  return (
    <div>
        <h1>Using useRef Hook</h1>
      <input type="text" 
      ref={inputElement}
       onChange={({target:{value}})=>setInputValue(value)} 
       value={inputValue}/>
      <button onClick={handleCount}>Click ME</button>
    </div>
  )
}

export default RefHook
