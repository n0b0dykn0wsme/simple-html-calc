let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = "";
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function calculate() {
  if (currentNumber !== "" && operator !== "") {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case "-":
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case "*":
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case "/":
        if (currentNumber === "0") {
          alert("Error: Division by zero!");
          return;
        } else {
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
        }
        break;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    document.getElementById("result").value = currentNumber;
  }
}
