function OperationGrid({ onReset, onDelete, onNumber, onOperator, onEquals }) {
  return (
    <div className="container">
      <button type="button" onClick={() => onNumber("7")}>
        7
      </button>
      <button type="button" onClick={() => onNumber("8")}>
        8
      </button>
      <button type="button" onClick={() => onNumber("9")}>
        9
      </button>
      <button type="button" className="delete-btn" onClick={onDelete}>
        DEL
      </button>
      <button type="button" onClick={() => onNumber("4")}>
        4
      </button>
      <button type="button" onClick={() => onNumber("5")}>
        5
      </button>
      <button type="button" onClick={() => onNumber("6")}>
        6
      </button>
      <button type="button" onClick={() => onOperator("+")}>
        +
      </button>
      <button type="button" onClick={() => onNumber("1")}>
        1
      </button>
      <button type="button" onClick={() => onNumber("2")}>
        2
      </button>
      <button type="button" onClick={() => onNumber("3")}>
        3
      </button>
      <button type="button" onClick={() => onOperator("-")}>
        -
      </button>
      <button type="button" onClick={() => onNumber(".")}>
        .
      </button>
      <button type="button" onClick={() => onNumber("0")}>
        0
      </button>
      <button type="button" aria-label="Divide" onClick={() => onOperator("/")}>
        /
      </button>
      <button
        type="button"
        aria-label="Multiply"
        onClick={() => onOperator("*")}
      >
        X
      </button>
      <button type="button" className="reset-btn" onClick={onReset}>
        RESET
      </button>
      <button type="button" className="equals-btn" onClick={onEquals}>
        =
      </button>
    </div>
  );
}

export default OperationGrid;
