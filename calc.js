const mathDiv = document.getElementById("mathDiv");

// Variables to store calculator operation parts
let firstNumber = "";
let operator = "";
let secondNumber = "";
// Create button elements for math buttons
const addition = document.createElement("button");
addition.textContent = "+";
addition.style.backgroundColor = 'green';
addition.addEventListener("click", () => {
handleOperatorClick("+");
});
// Add a keydown event listener to capture the "+" key press
document.addEventListener("keydown", function (event) {
if (event.key === "+") {
handleOperatorClick("+");
}
});

const subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.style.backgroundColor = 'purple';
subtraction.addEventListener("click", () => {
handleOperatorClick("-");
});
// Add a keydown event listener to capture the "+" key press
document.addEventListener("keydown", function (event) {
if (event.key === "-") {
handleOperatorClick("-");
}
});

const multiplication = document.createElement("button");
multiplication.textContent = "*";
multiplication.style.backgroundColor = 'blue';
multiplication.addEventListener("click", () => {
handleOperatorClick("*");
});
// Add a keydown event listener to capture the "+" key press
document.addEventListener("keydown", function (event) {
if (event.key === "*") {
handleOperatorClick("*");
}
});

const division = document.createElement("button");
division.textContent = "/";
division.style.backgroundColor = 'yellow';
division.addEventListener("click", () => {
handleOperatorClick("/");
});
// Add a keydown event listener to capture the "+" key press
document.addEventListener("keydown", function (event) {
if (event.key === "/") {
handleOperatorClick("/");
}
});

const clear = document.createElement("button");
clear.textContent = "Clear";
clear.style.backgroundColor = 'orange';
clear.addEventListener("click", () => {
clearCalculator();
});

const equal = document.createElement("button");
equal.textContent = "=";
equal.style.backgroundColor = 'red';
equal.addEventListener("click", () => {
calculateResult();
});
// Add a keydown event listener to capture the = key press
document.addEventListener("keydown", function (event) {
if (event.key === "=") {
calculateResult();
}
});

document.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
calculateResult();
}
});

//Adds the buttons to the div
mathDiv.appendChild(addition);
mathDiv.appendChild(subtraction);
mathDiv.appendChild(multiplication);
mathDiv.appendChild(division);
mathDiv.appendChild(clear);
mathDiv.appendChild(equal);


// Function to handle operator button clicks
function handleOperatorClick(selectedOperator) {
if (firstNumber === "") {
alert("Enter a number first.");
return;
}

if (operator !== "") {
alert("You can only perform one operation at a time.");
return;
}

operator = selectedOperator;
updateDisplay();
}

function clearCalculator() {
firstNumber = "";
operator = "";
secondNumber = "";
updateDisplay();
}

// Function to calculate and display the result
function calculateResult() {
if (firstNumber === "" || operator === "" || secondNumber === "") {
alert("Enter a complete operation.");
return;
}

const num1 = parseFloat(firstNumber);
const num2 = parseFloat(secondNumber);

let result;
switch (operator) {
case "+":
result = num1 + num2;
break;
case "-":
result = num1 - num2;
break;
case "*":
result = num1 * num2;
break;
case "/":
if (num2 === 0) {
alert("Division by zero is not allowed.");
clearCalculator();
return;
}
result = num1 / num2;
break;
default:
alert("Invalid operator.");
clearCalculator();
return;
}

firstNumber = result.toString();
operator = "";
secondNumber = "";
updateDisplay();
}

function updateDisplay() {
const display = document.getElementById("calculator-display");
display.textContent = firstNumber + operator + secondNumber;
}

//Numbers Div

const numberDiv = document.getElementById("numberDiv");

// Create number buttons with the "number-button" class
const buttons = [
"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."
];

buttons.forEach(number => {
const button = document.createElement("button");
button.textContent = number;
button.classList.add("number-button"); // Add the "number-button" class
button.addEventListener("click", () => {
handleNumberClick(number);
});
document.addEventListener("keydown", (event) => {
if(event.key === number){
handleNumberClick(number);
}
});
numberDiv.appendChild(button);
});
// Function to handle number button clicks
function handleNumberClick(clickedNumber) {
if (operator === "") {
firstNumber += clickedNumber;
} else {
secondNumber += clickedNumber;
}
updateDisplay();
}

updateDisplay();


