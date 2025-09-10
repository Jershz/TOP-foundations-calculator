const buttonLabels = 
["CE", "", "", "/",
 "7", "8", "9", "*",
 "4", "5", "6", "-",
 "1", "2", "3", "+",
 "0", ".", "+/-", "="]
 const operationLabels = ["+","-","*","/"];
const buttonsContainer = document.querySelector(".calculator-buttons-container");
const inputOutputDisplay = document.querySelector(".calculator-input-output");
inputOutputDisplay.textContent = 0;
const rows = 5;
const columns = 4;
let firstVal, secondVal, operator;

function initializeCalculatorButtons() {
    for(let i = 0; i < rows; i++) {
        const newRow = document.createElement("div");
        newRow.style.display = "flex";
        newRow.style.flex = "1";
        buttonsContainer.appendChild(newRow);

        for(let i = 0; i < columns; i++) {
            const newBtn = document.createElement("button");
            const btnLabel = buttonLabels.shift();
            newBtn.style.flex = "1";
            newBtn.textContent = btnLabel;
            newBtn.className = newBtn.textContent;
            newBtn.addEventListener("click", () => {
                if(newBtn.className === "CE") {
                    inputOutputDisplay.textContent = 0;
                    firstVal = null;
                    secondVal = null;
                }
                else if(inputOutputDisplay.textContent == 0) {
                    inputOutputDisplay.textContent = newBtn.textContent;
                }
                else inputOutputDisplay.textContent += newBtn.textContent;
            });
            newRow.appendChild(newBtn);
        }
    }
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(firstVal, secondVal, operator) {
    switch(operator) {
        case "+":
            return add(firstVal, secondVal);
        case "-":
            return subtract(firstVal, secondVal);
        case "*":
            return multiply(firstVal, secondVal);
        case "/":
            return divide(firstVal, secondVal);
        default:
            console.log("No such operator.");
            return NaN;            
    }
}

initializeCalculatorButtons();