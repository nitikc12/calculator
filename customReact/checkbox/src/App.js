import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <Confirmation />
    </div>
  );
}

export default App;
