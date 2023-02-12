import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
  ]);
  
  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
      <div className="app">
      <div className="todo-list">
      <h1>My todo list</h1>
      {todos.map((todo, index) => (  //loops over the list f- for every item in this list give me a to do item
      <TodoItem todo={todo} key={index} />
      ))}
      <TodoForm addTodo={addTodo} />
      </div>
      </div>
    );
  }

  export default App;

  //container for the whole app