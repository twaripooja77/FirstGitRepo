import React, { useState } from 'react'

const RegistratioForm = () => {
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword, setConfirmPassword]=useState("");
    const [errormessage, setErrormessage]=useState("");
    
 const handleUsername=(event)=>{
    console.log(event,"event");
    setUsername(event.target.value);
    console.log(username,"username");
 }
 const handlePassword=({target:{value}})=>{
setPassword(value);
console.log(password);
 }
 const handleConfirmpassword=({target:{value}})=>{
    
    setConfirmPassword(value);
    console.log(confirmpassword);
    setErrormessage(password!==value && "Password Doesnot Match!")
 }
 const handleSubmit=(e)=>{
   
    {password!==confirmpassword? alert("Password doesnot match"):alert("Password Match")}
    {!username==="" && !password===""? alert("Form Submitted"):alert("Please Fill Both")}
    e.preventDefault();
   
    // if(!username=="" && !password==""){
    //     alert("Form Submitted");
    // }else{
    //     alert("Please Fill username and password")
    // }

    
 }
  return (
    <div>
        <form>
        <h1>Registration Form</h1>
        <label for="username">Username</label>
        <input type="text" onChange={handleUsername} value={username}/><br/>
        <label for="password">Password</label>
        <input type="password" onChange={handlePassword} value={password}/><br/>
        <label for="confirmpassword">Confirm Password</label>
        <input type="password" onChange={handleConfirmpassword} value={confirmpassword}/>
        <p>{errormessage}</p>
        
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        </form>

    </div>
  )
}

export default RegistratioForm