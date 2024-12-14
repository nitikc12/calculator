function TodoList(props) {
  return (
    <li className="list">
      {props.item}
      <span className="icons">
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </li>
  );
}

export default TodoList;
