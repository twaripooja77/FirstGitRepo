import React from 'react'
import ChildList from './ChildList'

const FruitList = () => {
    const fruits=[
        {  id:1, name:"papaya" },
        {  id:2, name:"mango" },
        {  id:3, name:"apple" },
    ]
    let authorizedUser=true;
    console.log(authorizedUser,"authorization")

    return(
       
    <>
    
    {authorizedUser ?(
        <ul>{fruits.map((fruit,i)=>(
            <ChildList data={fruit.name} key={fruit.id}/>
        ))}</ul>
    ):(
       <div><p>Not Authorized</p></div>
    )}

    </>
   );

    // if(authorizedUser){
    //     return (
    //         <div>
    //             <ul>
    //                 {fruits.map((fruit,i)=>(
    //                     <ChildList data={fruit.name} key={fruit.id}/>
    //                 )
        
    //                 )}
    //             </ul>
    //         </div>
    //       )
    // }else{
    //     return(
    //         <>
    //         <p>No Authorized</p>
    //         </>
    //     )
       
    // }
  
}

export default FruitList