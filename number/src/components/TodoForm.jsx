import { useState } from "react";

function TodoForm(props) {
  let [todo, setTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo();
    setTodo("");
  };
  console.log(todo);
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        type="number"
        name="todo"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button
        onSubmit={handleSubmit}
        type="submit"
        onClick={() => {
          props.addTodo(todo);
        }}
      >
        Submit
      </button>
    </form>
  );
}
export default TodoForm;
