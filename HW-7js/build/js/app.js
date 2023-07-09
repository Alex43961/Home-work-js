"use strict";
let firstNumber;
let isRunning = true;
while (isRunning) {
    const userFirstNumber = prompt("Enter your first number");
    if (userFirstNumber == "" || isNaN(+(userFirstNumber))) {
        alert("Something went wrong. Try again.");
    }
    else {
        firstNumber = Number(userFirstNumber);
        isRunning = false;
    }
}
let secondNumber;
let isCount = true;
while (isCount) {
    const userSecondNumber = prompt("Enter your second number");
    if (userSecondNumber == "" || isNaN(+(userSecondNumber))) {
        alert("Something went wrong. Try again.");
    }
    else {
        secondNumber = Number(userSecondNumber);
        isCount = false;
    }
}
let isSymbol = true;
while (isSymbol) {
    const userSymbol = +prompt("Enter your symbol 1) + 2) - 3) * 4) /");
    switch (userSymbol) {
        case 1:
            isSymbol = alert(firstNumber + secondNumber);
            break;
        case 2:
            isSymbol = alert(firstNumber - secondNumber);
            break;
        case 3:
            isSymbol = alert(firstNumber * secondNumber);
            break;
        case 4:
            isSymbol = alert(firstNumber / secondNumber);
            break;
        default:
            alert("Something went wrong. Try again.");
            break;
    }
}
