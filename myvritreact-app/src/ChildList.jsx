import React from 'react'
import List from './List';
import Fruits from './Fruits';
import PersonList from './PersonList';
const ChildList = (props) => {
  console.log(props,"provided props");
  return (
    <div>
      <li>{props.data}</li>
    </div>
  )
}

export default ChildList;