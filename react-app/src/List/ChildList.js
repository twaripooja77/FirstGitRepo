import React from 'react'

const ChildList = (props) => {    //({data,value}) destructuring garera use garna milxa 
  if(props.authorization){
    return (
      <div>
        
         <li >{props.data}</li>
         
      </div>
    )

  }
 
}

export default ChildList