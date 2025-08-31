import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  const [todo, setTodo] = useState([{ task: <h3>Todo's</h3>, id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTodo = () => {
    // console.log("New toDo added.");
    setTodo((preTodo) => {
      return [...preTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo(""); //to make the input box empty after adding
  };
  let updateTodoValue = (event) => {
    // console.log(event.target.value)
    setNewTodo(event.target.value);
  };
  // to delete todo
  let deleteTodo = (id) => {
    setTodo((preTodo) => todo.filter((preTodo) => preTodo.id != id));
    // console.log(id);
  };
  let upperCaseAll = () => {
    setTodo(
      todo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };
  let upperCaseOne = (id) => {
    setTodo((todo) =>
      todo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <h2>toDo list</h2>
      <input
        placeholder="add task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTodo}>add Todo </button>
      <br />
      <br />
      <hr />
      {/* <h4>Todo tasks</h4> */}
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <span> {todo.task}</span>
            &nbsp; &nbsp;&nbsp;
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
            <button onClick={() => upperCaseOne(todo.id)}>UpperCaseOne</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCase</button>
    </div>
  );
}
