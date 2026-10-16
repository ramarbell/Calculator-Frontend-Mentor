import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Input from "./components/Input";
import OperationGrid from "./components/OperationGrid";

export default function App() {
  const [theme, setTheme] = useState(0);
  const [display, setDisplay] = useState("0");
  const [number1, setNumber1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [justCalculated, setJustCalculated] = useState(false);
  const [pendingOperation, setPendingOperation] = useState(false); // true if there is an operation pending, false if not

  function formatNumber(value) {
    if (value === "Error") return value;

    const [integer, decimal] = value.split(".");
    const formattedInt = Number(integer).toLocaleString("en-GB");

    return decimal !== undefined ? `${formattedInt}.${decimal}` : formattedInt;
  }

  const formattedDisplay = formatNumber(display);

  function handleNumber(number) {
    if (display === "Error") {
      setDisplay(number === "." ? "0." : number);

      return;
    }

    if (justCalculated) {
      setDisplay(number === "." ? "0." : number);
      setJustCalculated(false);
      setNumber1(null);
      setOperator(null);
      setPendingOperation(false);
      return;
    }
    if (pendingOperation) {
      setDisplay(number === "." ? "0." : number);
      setPendingOperation(false);
      return;
    }
    if (number === "." && display.includes(".")) return;

    if (display === "0" && number !== ".") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }

  function handleOperator(op) {
    if (display === "Error") return;
    const currentNumber = parseFloat(display);

    if (number1 === null) {
      setNumber1(currentNumber);

      setDisplay("0");
    } else if (operator && !justCalculated && !pendingOperation) {
      const result = calculateResult(number1, currentNumber, operator);

      if (result === "Error") {
        setDisplay("Error");
        setNumber1(null);
        setOperator(null);
        setJustCalculated(false);
        setPendingOperation(false);
        return;
      }
      setNumber1(result);
    }
    setJustCalculated(false);
    setPendingOperation(true);
    setOperator(op);
  }

  function handleEquals() {
    if (number1 !== null && operator) {
      const currentNumber = parseFloat(display);
      const result = calculateResult(number1, currentNumber, operator);

      if (result === "Error") {
        setDisplay("Error");
        setNumber1(null);
        setOperator(null);
        setJustCalculated(false);
        setPendingOperation(false);
        return;
      }

      setDisplay(result.toString());
      setNumber1(result);
      setOperator(null);
      setJustCalculated(true);
      setPendingOperation(false);
    }
  }

  function handleReset() {
    setDisplay("0");
    setNumber1(null);
    setOperator(null);
    setJustCalculated(false);
    setPendingOperation(false);
  }

  function handleDelete() {
    if (pendingOperation) return;
    if (justCalculated) return;

    setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  }

  function calculateResult(num1, num2, op) {
    switch (op) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error";
      default:
        return num2;
    }
  }

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={`app theme-${theme}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Input display={formattedDisplay} />
      <OperationGrid
        onReset={handleReset}
        onDelete={handleDelete}
        onNumber={handleNumber}
        onOperator={handleOperator}
        onEquals={handleEquals}
      />
    </div>
  );
}
