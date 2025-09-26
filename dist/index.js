"use strict";
let input = '0';
let operator = '';
let previousInput = '';
console.log("Hola");
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
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const target = event.target;
        const value = target.value;
        console.log(`Botón pulsado: ${value}`);
        calcDisplay(value);
    });
});
//# sourceMappingURL=index.js.map