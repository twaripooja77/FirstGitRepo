import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import ComponentMounting from './LifeCycle/ComponentMounting';
import ComponentUpdate from './LifeCycle/ComponentUpdate';
import ComponentUnmount from './LifeCycle/ComponentUnmount';
import Timer from './Timer';
import Child from './LifeCycle/Child';
import ChildComponent from './ChildComponent';
import List from './List/List';
import FruitList from './List/FruitList';
import StudentList from './List/StudentList';
import FirstUsestate from './Hooks/FirstUsestate';
import RegistratioForm from './Hooks/RegistratioForm';
import Counter2 from './Counter2';
import LoginForm from './Hooks/LoginForm';
import FirstEffect from './Hooks/FirstEffect';
import { useState } from 'react';
import RefHook from './Hooks/RefHook';
import Component1 from './Hooks/Component1';
import Component3 from './Hooks/Component3';
import ContextHook from './Hooks/ContextHook';
import ReducerHook from './Hooks/ReducerHook';
import TodoApp from './TodoApp';
import BasicButtons from './MUI/BasicButton';
function App() {;
  // let name="Pooja"
  // const[isRegistered,setIsRegistered]=useState(true);
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <MyComponent/> */}
      {/* <Counter/> */}
      {/* <ComponentMounting name1={name}/> */}
      {/* <ComponentUpdate/> */}
      {/* <ComponentUnmount/> */}
      {/* <ChildComponent/>
      <Timer/> */}
      {/* <List/> */}
      {/* <FruitList/> */}
      {/* <StudentList/> */}
      {/* <FirstUsestate/> */}
      {/* <RegistratioForm/> */}
     {/* <Counter2/> */}
     {/* <LoginForm/> */}
     {/* <FirstEffect/> */}
      
      {/* {isRegistered?<LoginForm/>:<RegistratioForm/>} */}
      {/* <RefHook/> */}
      {/* <ContextHook/> */}
      {/* <ReducerHook/> */}
      <TodoApp/>
      {/* <BasicButtons/> */}
     
    </div>
  );
}

export default App;
