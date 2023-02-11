import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  return (
      <div>
      <h1>My todo list</h1>
      <TodoItem todo="Finish plus project." />
      <TodoItem todo="Feed cat." />
      <TodoItem todo="Be awesome." />
      </div>
    );
  }

  export default App;