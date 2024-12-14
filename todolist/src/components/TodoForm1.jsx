import { useState } from "react";
// import "./App.css";
function TodoForm1(props) {
  let [middleName, setMiddlename] = useState("");
  let [lastName, setLastname] = useState("");
  let [date, setDate] = useState("");
  let [radio, setRadio] = useState("");
  let [select, setSelect] = useState("");
  let [number, setNumber] = useState("");
  let [address, setAddress] = useState("");

  const { addTodo, editTaskId, todo, setTodo } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);

    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-fields">
        <input
          value={todo}
          type="text"
          name="todo"
          onChange={(event) => setTodo(event.target.value)}
        />

        <input
          value={middleName}
          type="text"
          name="todo"
          onChange={(event) => setMiddlename(event.target.value)}
        />
        <input
          value={lastName}
          type="text"
          name="todo"
          onChange={(event) => setLastname(event.target.value)}
        />
      </div>

      <div className="other-fields">
        <input
          value={date}
          type="date"
          name="date"
          onChange={(event) => setDate(event.target.value)}
        />

        <select value={select}>
          <option value="someOption">Bagmati</option>
          <option value="otherOption">Lumbini</option>
          onChange={(event) => setSelect(event.target.value)}
        </select>

        <div>
          <select value={select}>
            <option value="someOption">Kathmandu</option>
            <option value="otherOption">Lalitpur</option>
            onChange={(event) => setSelect(event.target.value)}
          </select>
        </div>
      </div>
      <div className="other-fields2">
        <input
          value={address}
          type="text"
          name="todo"
          onChange={(event) => setAddress(event.target.value)}
        />
        <input
          value={number}
          type="number"
          name="todo"
          onChange={(event) => setNumber(event.target.value)}
        />

        <input
          value={radio}
          type="radio"
          name="radioButton"
          onChange={(event) => setRadio(event.target.value)}
          Female
        />
        <input
          value={radio}
          type="radio"
          name="radioButton"
          onChange={(event) => setRadio(event.target.value)}
        />
      </div>
      <button className="add-btn"> Save</button>
    </form>
  );
}
export default TodoForm1;
