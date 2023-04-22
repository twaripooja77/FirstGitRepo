import logo from './logo.svg';
import './App.css';
import ClassComponentdemo from './ClassComponentdemo';
import counterApp from './Counterapp';
import ComponentLifeCycle from './ComponentLifeCycle';
import ComponentUnmount from './ComponentUnmount';
import CounterApp from './Counterapp';
import Counterinterval from './Counterinterval';
import Child from './Child';
import ChildList from './ChildList';
import List from './List';
import Fruits from './Fruits';
import PersonList from './PersonList';
import User from './User';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { useState } from 'react';
import Reducerhook from './Reducerhook';



function App() {
  // let name="Ruby";
  // let count1="Hello";

  const[isRegistered, setRegistered]=useState(false);

 
  

  return (
    <div className="App">
     {/* <p>Hello</p>
     <List/>
     <Fruits/> */}
      {/* <CounterApp/> */}
{/* {isRegistered ?<LoginForm/>
  :<RegistrationForm setRegistered={setRegistered}/>} */}
<Reducerhook/>
     </div>
  
  );
}

export default App;


