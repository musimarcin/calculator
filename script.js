const number = document.querySelectorAll(".number");
const current = document.querySelector("#current");
const all_clear = document.querySelector("#AC");
const clear = document.querySelector("#C");
const operation = document.querySelectorAll(".operation");
const evaluate = document.querySelector("#evaluate");
let operand;
let firstNumber;


all_clear.addEventListener("click", () => clearCurrent());
number.forEach(e => e.addEventListener("click", () => addElement(e)));
clear.addEventListener("click", () => deleteLast());
operation.forEach(e => e.addEventListener("click", () => setOperation(e.textContent)));
evaluate.addEventListener("click", () => calculate());


function add(a,b) {
    return a+b;
}

function minus(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function addElement(element) {
    let current_array = Array.from(current.textContent);
    const point = ".";
    if (element.textContent == point) {
        if (!current_array.some((x) => x === point)) {
            current.textContent += element.textContent;
        }
    } else {
        current.textContent += element.textContent;
    }
}

function clearCurrent() {
    current.textContent = "";
}

function deleteLast() {
    current.textContent = current.textContent.toString().slice(0,-1);
}


function setOperation(newOperand) {
    operand = newOperand;
    firstNumber = current.textContent;
    clearCurrent();
}

function getOperation() {
    return operand;
}



function calculate(first, operation) {
    first = parseFloat(firstNumber);
    operation = getOperation();
    let secondNumber = parseFloat(current.textContent);
    let result = "";
    switch (operation) {
        case "+":
            result = add(first, secondNumber)
            clearCurrent();
            current.textContent = result;
            break;
        case "-":
            result = minus(first, secondNumber)
            clearCurrent();
            current.textContent = result;
            break;
        case "*":
            result = multiply(first, secondNumber)
            clearCurrent();
            current.textContent = result;
            break;
        case "/":
            result = divide(first, secondNumber)
            clearCurrent();
            current.textContent = result;
            break;
        default:
    }
    
}