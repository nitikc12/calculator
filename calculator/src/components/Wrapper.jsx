// import React, { useState } from "react";

function Wrapper({
  onClick,
  operatorClick,
  allClick,
  click,
  square,
  cube,
  root,
  cubeRoot,
}) {
  const handleClick = (value) => {
    console.log("clicked");
    console.log("Button clicked:", value);
    onClick(value);
  };
  const handleOperatorClick = (operatorVal) => {
    console.log(operatorVal);
    console.log("operator clicked:", operatorVal);
    operatorClick(operatorVal);
  };
  const handleSquare = (valueSquare) => {
    console.log(valueSquare);
    console.log("operator clicked:", valueSquare);
    square(valueSquare);
  };
  const handleCube = (valueCube) => {
    console.log(valueCube);
    console.log("operator clicked:", valueCube);
    cube(valueCube);
  };
  const handleRoot = (valueRoot) => {
    console.log(handleRoot);
    console.log("operator clicked:", valueRoot);
    root(handleRoot);
  };
  const handleCubeRoot = (valueCubeRoot) => {
    console.log(handleCubeRoot);
    console.log("operator clicked:", valueCubeRoot);
    cubeRoot(handleCubeRoot);
  };

  return (
    <div id="calculator">
      <div className="keys">
        <div className="line-1">
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
          <button
            onClick={() => handleOperatorClick("÷")}
            className="operator-btn"
          >
            ÷
          </button>
          {/* onClick={onClear}  */}
          <button onClick={click} className="clear-btn">
            AC
          </button>
        </div>
        <div className="line-2">
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
          <button
            onClick={() => handleOperatorClick("*")}
            className="operator-btn"
          >
            *
          </button>
          <button onClick={() => handleCubeRoot("∛x")}>∛x</button>
        </div>
        <div className="line-3">
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleSquare("x2 ")}>x2 </button>
          <button onClick={() => handleCube("x³")}>x³</button>
        </div>
        <div className="line-4">
          <button
            onClick={() => handleOperatorClick("+")}
            className="operator-btn"
          >
            +
          </button>
          <button onClick={() => handleClick(0)}>0</button>
          <button
            onClick={() => handleOperatorClick("-")}
            className="operator-btn"
          >
            -
          </button>
          <button onClick={() => handleRoot("√x")}>√x</button>
          <button onClick={allClick} className="operator-btn">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Wrapper;
