"use strict";
function calculator() {
    const firstNumber = document.getElementById("num1");
    const secondNumber = document.getElementById("num2");
    const operator = document.getElementById("operator");
    const resultSpan = document.getElementById("result");
    const history = document.getElementById("history");
    const num1 = parseFloat(firstNumber.value);
    const num2 = parseFloat(secondNumber.value);
    const operation = operator.value;
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
        default:
            result = NaN;
    }
    if (!isNaN(result)) {
        const historyItem = document.createElement("li");
        historyItem.textContent = `${num1} ` + `${operation} ` + `${num2} ` + "= " + `${result}`;
        history.appendChild(historyItem);
    }
    resultSpan.textContent = isNaN(result) ? '😢' : '😊';
}
document.addEventListener('DOMContentLoaded', () => {
    const firstNumber = document.getElementById('num1');
    const secondNumber = document.getElementById('num2');
    const operator = document.getElementById('operator');
    //firstNumber.addEventListener('input', calculator);
    //secondNumber.addEventListener('input', calculator);
    operator.addEventListener('change', calculator);
    
});
