import React, { useState } from "react";
import "./App.css";
import TodoForm1 from "./components/TodoForm1";
import TodoList from "./components/TodoList";
import Confirmation from "./components/Confirmation";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoListItems, setTodoListItems] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [todo, setTodo] = useState("");

  const addTodo = (inputText) => {
    const newTodo = { id: uuidv4(), item: inputText };
    setTodoListItems([...todoListItems, newTodo]);
  };

  const handleRemove = (id) => {
    const newList = todoListItems.filter((item) => item.id !== id);

    setTodoListItems(newList);
  };

  const edit = (id, value) => {
    setEditTaskId(id);
    setTodo(value);
  };

  return (
    <div>
      <h1 className="app-heading">TODO</h1>
      <TodoForm1 />

      <ul>
        <TodoList />
      </ul>
      <Confirmation />
    </div>
  );
}

export default App;
