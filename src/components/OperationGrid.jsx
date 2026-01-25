function OperationGrid({onReset, onDelete, onNumber, onOperator, onEquals}) {
    

    return (
        <div className="container">
            
                <button onClick={() => onNumber("7")}>7</button>
                <button onClick={() => onNumber("8")}>8</button>
                <button onClick={() => onNumber("9")}>9</button>
                <button className="delete-btn" onClick={onDelete}>DEL</button>
                <button onClick={() => onNumber("4")}>4</button>
                <button onClick={() => onNumber("5")}>5</button>
                <button onClick={() => onNumber("6")}>6</button>
                <button onClick={() => onOperator("+")}>+</button>
                <button onClick={() => onNumber("1")}>1</button>
                <button onClick={() => onNumber("2")}>2</button>
                <button onClick={() => onNumber("3")}>3</button>
                <button onClick={() => onOperator("-")}>-</button>
                <button onClick={() => onNumber(".")}>.</button>
                <button onClick={() => onNumber("0")}>0</button>
                <button onClick={() => onOperator("/")}>/</button>
                <button onClick={() => onOperator("*")}>X</button>
                <button className="reset-btn" onClick={onReset}>RESET</button>
                <button className="equals-btn" onClick={onEquals}>=</button>


            
                
                
        </div>
    )
}

export default OperationGrid