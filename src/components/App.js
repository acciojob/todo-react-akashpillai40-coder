
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

//add a task 
const addTodo = () => {
  if(task.trim() === "") return;

  setTodos((prev) => [...prev, task]);
  setTask("")
};
//delete task
  const deleteTodo = (indexToDelete) => {
    setTodos((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleChange =  (e) => {
    setTask(e.target.value)
  }
  return (
    <div>
      <h1>To-Do-List</h1>

      <input
      type="text"
      placeholder="Enter task"
      value={task}
      onChange={handleChange}
      />
  
       <button onClick={addTodo}>Add Todo</button>

      <Todo todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
