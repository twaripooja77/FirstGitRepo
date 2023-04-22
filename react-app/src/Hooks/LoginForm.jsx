import React, { useState } from 'react'

const LoginForm = () => {
    const[userInfo, setUserInfo]=useState({
        username:"",
        password:"",
        confirmpassword:"",
    })
    const{username,password}=userInfo;
    const handleUsername=({target:{value}})=>{
        setUserInfo({...userInfo,username:value})
    }
    const handlePassword=({target:{value}})=>{
        setUserInfo({...userInfo,password:value})
    }
  return (
    <div>
        <form>
        <h1>Login Form</h1>
        <label for="username">Username</label>
        <input type="text" onChange={handleUsername} value={username}/><br />
        <label for="password">Password</label>
        <input type="password" onChange={handlePassword}  value={password}/>    
        <br />
        <button>Login</button>
        </form>
      

    </div>
  )
}

export default LoginForm
