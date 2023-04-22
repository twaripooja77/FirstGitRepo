import React from 'react'
import ChildList from './ChildList'

const StudentList = () => {
    const students=[
        {name:"Pooja", isAuthorized:true},
        {name:"Pawan", isAuthorized:false},
        {name:"Binaya", isAuthorized:true},
    ]
    return (
        <div>
           <ul>
           {students.map((student,i)=>(
                <ChildList  data={student.name} authorization={student.isAuthorized} key={i}/>
                ))}
           </ul>
        </div>
      )
   
 
}

export default StudentList