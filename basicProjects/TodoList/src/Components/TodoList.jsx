import {useState} from 'react';
export default function TodoList(){
    const [todo,setTodo]=useState(["Sample Task"]);
    let [newTodo,setNewTodo]=useState("");
    let addNewTodo=()=>{
        // console.log("New toDo added.");
        setTodo([...todo,newTodo]);
    }
    let updateTodoValue=(event)=>{
        // console.log(event.target.value)
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <h2>toDo list</h2>
            <input placeholder="add task"
            value={newTodo}
             onChange={updateTodoValue}>
             </input>
            <button onClick={addNewTodo}>add Todo </button>
            <br /><br />
            <hr />
            <h4>Todo tasks</h4>
            <ul>
                {todo.map((todo)=>(
                        <li>{todo}</li>
                    ))}
            </ul>
        </div>
    )
}