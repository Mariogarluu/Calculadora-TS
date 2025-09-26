"use strict";
let input = '0';
let operator = '';
let previousInput = '';
function calcDisplay(values) {
    let update = false;
    if (['+', '-', '*', '/'].includes(values)) {
        if (input !== '0' && input !== '') {
            if (previousInput !== '0' && previousInput !== '') {
            }
            else {
                update = true;
                input += values;
            }
        }
    }
    else {
        update = true;
        if (values === '.' && input.includes('.')) {
            update = false;
        }
        else if (input === '0' && values !== '.') {
            input = values;
        }
        else if (values === "delete") {
            deleteLast();
            update = false;
        }
        else if (values === "clear") {
            input = '';
        }
        else if (values === '=') {
            calculate();
            update = false;
        }
        else if (values === 'hex') {
            hexa();
            update = false;
        }
        else if (values === 'bin') {
            binary();
            update = false;
        }
        else {
            input += values;
        }
    }
    if (update) {
        if (values !== "clear" && values !== "delete") {
            updateScreen();
        }
    }
}
function updateScreen() {
    const display = document.getElementById('screen');
    if (display) {
        display.value = input;
    }
    else {
        console.error('No se encontró el elemento con ID "screen".');
    }
}
function deleteLast() {
    if (Number(input) > 1) {
        input = input.slice(0, -1);
    }
    else {
        input = '';
    }
    updateScreen();
}
function calculate() {
    const numbers = [];
    const operators = [];
    let currentNumber = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (!isNaN(Number(char)) || char === '.') {
            currentNumber += char;
        }
        else if (['+', '-', '*', '/'].includes(char)) {
            if (currentNumber) {
                numbers.push(Number(currentNumber));
                currentNumber = '';
            }
            operators.push(char);
        }
    }
    if (currentNumber) {
        numbers.push(Number(currentNumber));
    }
    if (numbers.length === 0) {
        throw new Error('No se ingresaron números válidos.');
    }
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];
        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                result /= nextNumber;
                break;
        }
    }
    input = result.toString();
    updateScreen();
}
function binary() {
    const number = parseFloat(input);
    if (!isNaN(number)) {
        input = Math.floor(number).toString(2);
        updateScreen();
    }
    else {
        input = 'Error';
        updateScreen();
    }
}
function hexa() {
    const number = parseFloat(input);
    if (!isNaN(number)) {
        input = Math.floor(number).toString(16).toUpperCase();
        updateScreen();
    }
    else {
        input = 'Error';
        updateScreen();
    }
}
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const target = event.target;
        const value = target.value;
        if (value !== undefined) {
            calcDisplay(value);
        }
    });
});
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(Number(key)) || ['+', '-', '*', '/'].includes(key)) {
        calcDisplay(key);
    }
    else if (key === 'Backspace') {
        deleteLast();
    }
    else if (key === 'Enter' || key === '=') {
        calculate();
    }
    else if (key === 'b') {
        binary();
    }
    else if (key === 'h') {
        hexa();
    }
    else if (key === 'Escape' || key === 'c') {
        input = '';
        updateScreen();
    }
    else if (key === '.') {
        calcDisplay(key);
    }
});
//# sourceMappingURL=index.js.map