import React from "react";
import { useState } from "react";
import Screen from "./Screen";
import Wrapper from "./Wrapper";

export default function Calculator() {
  //display value on calculator
  let [clicked, setClicked] = useState("");

  //stores the first number entered
  const [firstValue, setFirstValue] = useState(null);

  //operations that have been selected
  const [operator, setOperator] = useState(null);

  // Keeps track of whether the calculator is in an "ongoing calculation" state
  const [isResult, setIsResult] = useState(true);

  const handleClick1 = (val) => {
    if (isResult) {
      // If a result is already displayed, clicking a number should start a new calculation
      setClicked(val.toString());
      setIsResult(false);
    } else {
      //else keep appending the number
      setClicked(clicked + val);
    }
  };

  //function to handle addition
  // const handleAdditionClick = () => {
  //   const valueAdd = parseFloat(clicked);
  //   const resultAdd = firstValue + valueAdd;
  //   setClicked(resultAdd.toString());
  //   resetCalculator();
  // };

  //function to handle the square x2
  const handleSquare = () => {
    const value = parseFloat(clicked);
    const result0 = Math.pow(value, 2);
    setClicked(result0.toString());

    resetCalculator();
  };

  //function to handle the cube x3
  const handleCube = () => {
    const value1 = parseFloat(clicked);
    const result1 = Math.pow(value1, 3);
    setClicked(result1.toString());
    setIsResult(true);
    resetCalculator();
  };

  //function to handle square root
  const handleRoot = () => {
    const value2 = parseFloat(clicked);
    const result2 = Math.sqrt(value2);
    setClicked(result2.toString());
    setIsResult(true);
    resetCalculator();
  };

  //function to handle cube root
  const handleCubeRoot = () => {
    const value3 = parseFloat(clicked);
    const result3 = Math.cbrt(value3);
    setClicked(result3.toString());
    setIsResult(true);
    resetCalculator();
  };

  //Function to handle operator button clicks
  const handleOperatorClick = (op) => {
    console.log("Operator:", op);
    if (firstValue === null) {
      setFirstValue(parseFloat(clicked));
      setClicked("");
    } else if (clicked !== "") {
      const currentValue = parseFloat(clicked);

      let result;
      switch (operator) {
        case "+":
          result = firstValue + currentValue;
          break;
        case "-":
          result = firstValue - currentValue;
          break;
        case "*":
          result = firstValue * currentValue;
          break;
        case "÷":
          if (currentValue === 0) {
            result = "error";
          } else {
            result = firstValue / currentValue;
          }
          break;
        default:
          result = currentValue;
      }
      setFirstValue(result);
      setClicked("");
    }
    setOperator(op); //update the operator
    setIsResult(false); // Ensure we're not in a result state after operator click
  };

  const handleClearClick = () => {
    setClicked("");

    resetCalculator();
    setIsResult(false); // Reset result state
  };

  const resetCalculator = () => {
    setFirstValue(null);
    setOperator(null);
  };

  //Function to handle equals button click
  const handleEqualsClick = () => {
    if (operator === null || clicked === "") return;
    const currentValue = parseFloat(clicked);
    let result;

    switch (operator) {
      case "+":
        result = firstValue + currentValue;
        break;
      case "-":
        result = firstValue - currentValue;
        break;
      case "*":
        result = firstValue * currentValue;
        break;
      case "÷":
        if (currentValue === 0) {
          result = "error";
        } else {
          result = firstValue / currentValue;
        }
        break;
      default:
        result = currentValue;
    }

    setClicked(result.toString());
    resetCalculator(); // Reset for next calculation
    setIsResult(true); // Mark that we are in result mode now
  };

  return (
    <div className="calculator">
      <Screen value={clicked} />
      {operator && <div className="display-operator">{operator}</div>}
      <Wrapper
        onClick={handleClick1}
        operatorClick={handleOperatorClick}
        allClick={handleEqualsClick}
        click={handleClearClick}
        square={handleSquare}
        cube={handleCube}
        root={handleRoot}
        cubeRoot={handleCubeRoot}
      />
    </div>
  );
}
