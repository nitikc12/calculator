import "./App.css";
import Confirmation from "./components/Confirmation";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [todoList, setTodoList] = useState([]);
  let addTodo = (inputText) => {
    const newTodo = { id: uuidv4(), item: inputText };
    setTodoList(...todoList, newTodo);
  };

  console.log(todoList);
  return (
    <div>
      {/* <TodoList /> */}
      <TodoForm addTodo={addTodo} />
      <ul>
        {todoList.map(({ id, item }) => (
          <TodoList value={item} key={id} />
        ))}
      </ul>
      <Confirmation />
    </div>
  );
}

export default App;
