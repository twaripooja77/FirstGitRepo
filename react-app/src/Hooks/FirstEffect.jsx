import React, { useState,useEffect } from 'react'

const FirstEffect = () => {
    const[count,setCount]=useState(0);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount((count)=>count+1)
    //     },1000)
    // },[])                  //dependency array nadiye it runs on every render


    // useEffect(()=>{
    //     document.title=`I have rendered ${count} times`
    //     console.log("i am running")
    // },[count])


    useEffect(()=>{
     const interval= setInterval(()=>{
        setCount((prev)=>prev+1)
      },1000);
      //clean up function
return()=>{
  clearInterval(interval);
 } },[])


    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
     {/* <p>I have rendered {count} times</p> */}
     <div>{count}</div>
     <button onClick={handleClick}>Click ME</button>
    </div>
  )
}

export default FirstEffect
