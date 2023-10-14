const operand = document.querySelectorAll(".number");
const current = document.querySelector("#current");
const all_clear = document.querySelector("#AC");
const clear = document.querySelector("#C");
const operation = document.querySelectorAll(".operation");



all_clear.addEventListener("click", () => clearContent());
operand.forEach(e => e.addEventListener("click", () => addElement(e)));
clear.addEventListener("click", () => deleteLast());
operand.forEach(e => e.addEventListener("click", () => setOperation(e.textContent)));



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

function clearContent() {
    current.textContent = "";
}

function deleteLast() {
    current.textContent = current.textContent.toString().slice(0,-1);
}

function setOperation(operation) {
    return operation;
}