import { useState } from "react";

function Button(props) {
  return <button>{props.label}</button>; // "label" is a prop
}
export default function TextForm() {
  const [count, setCount] = useState();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <Button label="Submit" /> {/* "label" is a prop */}
    </div>
  );
}
