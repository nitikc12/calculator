import React, { useState } from "react";
import Toggler from "./components/Toggler.js"; // Assuming this is the correct path
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true); // Manage toggle state

  const handleToggle = () => {
    setToggle((prev) => !prev); // Toggle the state between true and false
  };

  return (
    <div className="App">
      <Toggler toggle={toggle} onToggle={handleToggle} />
      {/* Other components like Navbar, ProductList, etc. can go here */}
    </div>
  );
}

export default App;
