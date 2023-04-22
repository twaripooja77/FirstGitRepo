import React from 'react';
import { useState } from 'react';
import './login.css';

const LoginForm = () => {
   const [loginpage, setLoginpage]=useState({
    username:"",
    password:"",
    submit:false,
   })

   const submitHandler=(e)=>{
    e.preventDefault();
   }

   const handleusername=({target:{value}})=>{
    setLoginpage({...loginpage,username:value})
    console.log(loginpage.username);
   }

   const handlepassword=({target:{value}})=>{
    setLoginpage({...loginpage,password:value})
    console.log(loginpage.password.value);
   }
   const handleSubmit=()=>{
    if(loginpage.username==="" || loginpage.password==="" ){
        alert("Please fill username and password")
    }else{
    alert("FORM SUBMITTED");
}
   }
  return (
    <>
    <form action="" onSubmit={submitHandler} className="loginform">
        <div className="myform">
            
    <h1>Login Page</h1>
    <div className="form-group">
    <label>Username:</label>
    <input type="text" onChange={handleusername} value={loginpage.username} id="username"/><br/>
    </div>
    <div className="form-group">
    <label >Password:</label>
    <input type="password" onChange={handlepassword} value={loginpage.password} id="username"/><br/>
    </div>
    <input type="submit" value="Login"  onclick={handleSubmit}className='submit'/>
    </div>
    </form>
    </>
  )
}

export default LoginForm