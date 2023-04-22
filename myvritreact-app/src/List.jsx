import React from 'react'
import ChildList from './ChildList';
const List = () => {
  const languages=["Java","Python","Ruby"];
  const authorizedUser=false;
 
    return (
      <div> 
         {authorizedUser ?(
         <ul>  
              {languages.map((language,i)=>(
              <ChildList data={language} key={i}/>)
              )}
              
            </ul>
         ):(<>Not Authorized</>)}
            
      </div>
      
    )
}

export default List;