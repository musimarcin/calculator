const number = document.querySelectorAll(".number");
const current = document.querySelector("#current");
const last = document.querySelector("#last");
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
    last.textContent = firstNumber + " " + operand;
}


function getOperation() {
    return operand;
}



function calculate(first, operation) {
    first = parseFloat(firstNumber);
    operation = getOperation();
    let secondNumber = parseFloat(current.textContent);
    let eq = "";
    let result = 0;
    switch (operation) {
        case "+":
            eq = add(first, secondNumber);
            result = Math.round((eq + Number.EPSILON) * 1000) / 1000;
            break;
        case "-":
            eq = minus(first, secondNumber)
            result = Math.round((eq + Number.EPSILON) * 1000) / 1000;
            break;
        case "*":
            eq = multiply(first, secondNumber)
            result = Math.round((eq + Number.EPSILON) * 1000) / 1000;
            break;
        case "/":
            eq = divide(first, secondNumber)
            result = Math.round((eq + Number.EPSILON) * 1000) / 1000;
            break;
        default:
    }
    clearCurrent();
    current.textContent = result.toString();
    last.textContent += " " + secondNumber + " =";

}