import React from 'react'
import ChildList from './ChildList'

const List = () => {
    const languages=["java", "python","ruby"]
  return (
    <div>
        <ul>
            {languages.map((language,i)=>(
              <ChildList data={language} index={i} key={i}/>
                // <li key={i}>{language}</li>
            ))}
            
        </ul>
    </div>
  )
}

export default List