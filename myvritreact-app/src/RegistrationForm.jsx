import React from 'react'
import { useState } from 'react'

export default function RegistrationForm() {
    // const[username, setUsername]=useState("");
    // const[password,setPassword]=useState("");
    // const[conpassword,setConPassword]=useState("");
    // const[passworderror, setPassworderror]=useState(""); 

    const [userInfo, setUserInfo]=useState({
      username:"",
      password:"",
      conpassword:""

    })
    console.log(userInfo);
      
    const handleusername=({target:{value}})=>{
            console.log(value, "username event");
            setUserInfo({...userInfo,username:value});
    }

    const handlepassword=({target:{value}})=>{
      console.log(value, "username event");
      setUserInfo({...userInfo,password:value});
}

const conmypassword=({target:{value}})=>{
  console.log(value, "username event");
  setUserInfo({...userInfo,conpassword:value});
}

    
//     const handleusername=(event)=>{
//             console.log(event.target.value, "username event");
//             setUsername(event.target.value);
//     }
//     const handlepassword=({target:{value}})=>{
//         console.log(value, "password event");
//         setPassword(value);
// }
// const handleerror=(event)=>{

//   if (setPassword!==setConPassword){
//    setPassworderror("Password doesnot match");
//   }else{
//     <p></p>
//   }
// }

// const conmypassword=({target:{value}})=>{
//     console.log(value,"confirm password value");
// setConPassword(value);

// }
const handleSubmit=()=>{
    if(userInfo.username==="" || userInfo.password==="" ){
        alert("Please fill username and password")
    }else{
    alert("FORM SUBMITTED");
}
}
// username!==""&& password!==""?
// alert(password===confirmpassword ?"Data Submitted"):alert("Password must match");
// console.log(password,"blankpassword");
// }

// const confirmbothPassword=()=>{
//     if(password!==confirmmypassword){
// setParagraph("Password Doesnot Match");
//     }
// }

  return (
    // <form onSubmit={handleSubmit}>
    <form >
    <div>
        <h1>Registration Form</h1>
      <label>User Name</label>
      <input type="text"  onChange={handleusername} value={userInfo.username}  /><br/>

      <label>Password</label>
      <input type="password" onChange={handlepassword} value={userInfo.password}/><br/>

      <label> Confirm Password</label>
      <input type="password" onChange={conmypassword} value={userInfo.conpassword}/><br/>
      {/* <p value={passwordmatch} onChange={confirmbothPassword}></p> */}



      {/* <p  value={passworderror}></p> */}

      <button onClick={handleSubmit}>Submit</button>
    </div>
    </form>
  )
}
