import React,{useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TodoApp = () => {
    const[todo, setTodo]=useState([]);
    const[inputValue, setInputValue]=useState();
    const[edit, setEdit]=useState(false); 
    const[editIndex,setEditIndex]=useState(-1); 

    const handleSubmit=(event)=>{
event.preventDefault();
if(edit){
    setTodo((prevTodo)=>{
        prevTodo[editIndex]=inputValue;
        return prevTodo;
    });
    setEdit(false);
    setEditIndex(-1);
    setInputValue("");
}else{
    setTodo((prevValue)=>{
        console.log(prevValue,"previous value");
        // let arr1=[...prevValue];
        // arr1.push(inputValue);
        return [...prevValue,inputValue];
    })
    console.log(todo,"this is todo")
setInputValue("");
}

    }

    const handleEdit=(index)=>{
      setEditIndex(index);
      setInputValue(todo[index]);
        setEdit(true);
    }

    const handleDelete=(index)=>{
        setTodo((prevValue)=>{
            const array2=[...prevValue];
            array2.splice(index,1);
            return[array2];
        })
    }
    const handleInputValue=({target:{value}})=>{
        setInputValue(value);
        console.log(inputValue);
        }

  return (
    <div>
        <h1>My Todo's</h1>
        <input type="text" value={inputValue} onChange={handleInputValue}/>
        <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleSubmit}>{edit ? "Update": "Add"}</Button>
    </Stack>
        <button onClick={handleSubmit} >{edit ? "Update": "Add"}</button>
       <ul>
        {todo.map((todo,index)=>{
            console.log(todo);
            return(
                <li key={index}>
                    {todo}
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    <button onClick={()=>handleDelete(index)}>Delete</button>

                </li>
            )
        })}
       </ul>
    </div>
  )
}

export default TodoApp