import React from 'react'
import User from './User'
const PersonList = () => {
    const persons=[
        { id:1, name:"Pooja", isAuthenticated:true},
        { id:2, name:"Pawan", isAuthenticated:false},
        { id:3, name:"Binaya", isAuthenticated:true},
    ]
  return (
    <div>
    <ul>
    {persons.map((person)=>(
        <User data={person.name} key={person.id} authentication={person.isAuthenticated}/>
    )
    
    )}
    </ul>
   
</div>
       
   
       
        
        
  )
}

export default PersonList