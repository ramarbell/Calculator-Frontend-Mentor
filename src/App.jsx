import { useState, useEffect } from "react"
import ThemeToggle from "./components/ThemeToggle"
import Input from "./components/Input"
import OperationGrid from "./components/OperationGrid"




export default function App() {
  const [theme, setTheme] = useState(0)
  const [display, setDisplay] = useState("0");
  const [number1, setNumber1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [justCalculated, setJustCalculated] = useState(false);

  function formatNumber(value) {
    if (value === "Error") return value;
  
    const [integer, decimal] = value.split(".");
    const formattedInt = Number(integer).toLocaleString("en-GB");
  
    return decimal !== undefined
      ? `${formattedInt}.${decimal}`
      : formattedInt;
  }


  function handleNumber(number) {

    if (justCalculated) {
      setDisplay(number === "." ? "0." : number);
      setJustCalculated(false);
      setNumber1(null);
      setOperator(null);
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
    const currentNumber = parseFloat(display.replace(/,/g, ""));

    if (number1 === null) {
      setNumber1(currentNumber);
      setOperator(op);
      setDisplay("0");

} else if (operator && !justCalculated) {
  const result = calculateResult(number1, currentNumber, operator);
  setNumber1(result);
      setOperator(op);
      setDisplay("0");
} else {
  setOperator(op)
}
setJustCalculated(false)
  }

  function handleEquals() {
    if (number1 !== null && operator) {
      const currentNumber = parseFloat(display);
      const result = calculateResult(number1, currentNumber, operator);
      setDisplay(result.toString());
      setNumber1(result);
      setOperator(null);
      setJustCalculated(true);
    }
  }
  

  function handleReset() {
    setDisplay("0");
    setNumber1(null);
    setOperator(null);
    setJustCalculated(false)
  }

  function handleDelete() {
    if (justCalculated) {
      setDisplay("0");
      setJustCalculated(false);
      return;
    }
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
                return num2

    }
  }
  
  
  
  
  
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);
  
  
  return (
    <div className={`app theme-${theme}`}>
      
      <ThemeToggle theme={theme} setTheme={setTheme} />
<Input display={display} setDisplay={setDisplay} formatNumber={formatNumber} />
<OperationGrid onReset={handleReset} 
onDelete={handleDelete} 
onNumber={handleNumber} 
onOperator={handleOperator} 
onEquals={handleEquals}/>
    </div>
  )
}

