import { useState } from "react";
function TodoForm() {
  let [todo, setTodo] = useState("");
  return (
    <form>
      <input
        type="checkbox"
        value={todo}
        name="todo"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default TodoForm;
