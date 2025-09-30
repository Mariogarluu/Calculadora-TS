import { fromEvent, debounceTime, map, timer } from 'rxjs';

let currentInput: string = '0';
let operator: string = '';
let previousInput: string = '';

function appendToDisplay(value: string): void {
    let update = false;
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '0' && currentInput !== '') {
            if (previousInput !== '' && operator !== '') {
                calculate();
            }
            previousInput = currentInput;
            operator = value;
            currentInput = '0';
        }
    } else {
        update = true;
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }
    if (update) {
        updateDisplay();
    }
}

function updateDisplay(): void {
    const display = document.getElementById('screen') as HTMLInputElement;
    if (display) display.value = currentInput;
}

function clearDisplay(): void {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function deleteLast(): void {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate(): void {
    if (previousInput !== '' && currentInput !== '0' && currentInput !== '' && operator !== '') {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result: number;
        
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Error: División por cero');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
    setupEventListeners();
});

function setupEventListeners(): void {
    const buttonsContainer = document.querySelector('.buttons');
    if (buttonsContainer) {
        buttonsContainer.addEventListener('click', (event) => {
            const target = event.target as HTMLButtonElement;
            if (target.tagName === 'BUTTON') {
                const value = target.value;
                if (value === 'clear') {
                    clearDisplay();
                } else if (value === 'delete') {
                    deleteLast();
                } else if (value === '=') {
                    calculate();
                } else if (value === 'bin') {
                    convertToBase(2);
                } else if (value === 'hex') {
                    convertToBase(16);
                } else if (!isNaN(Number(value)) || value === '.' || ['+', '-', '*', '/'].includes(value)) {
                    appendToDisplay(value);
                }
            }
        });
    }
    setupKeyboardEvents();
}

function convertToBase(base: number): void {
    const num = parseFloat(currentInput);
    if (!isNaN(num)) {
        if (base === 2) {
            currentInput = num.toString(2);
        } else if (base === 16) {
            currentInput = num.toString(16).toUpperCase();
        }
        updateDisplay();
    }
}

function setupKeyboardEvents(): void {
    const keyboardEvents$ = fromEvent<KeyboardEvent>(document, 'keydown');
    keyboardEvents$
        .pipe(
            debounceTime(50),
            map(event => event.key)
        )
        .subscribe(key => {
            switch (key) {
                case '0': case '1': case '2': case '3': case '4':
                case '5': case '6': case '7': case '8': case '9':
                case '.':
                    appendToDisplay(key);
                    break;
                case '+': case '-': case '*': case '/':
                    appendToDisplay(key);
                    break;
                case 'Enter':
                case '=':
                    calculate();
                    break;
                case 'Escape':
                case 'c':
                case 'C':
                    clearDisplay();
                    break;
                case 'Backspace':
                    deleteLast();
                    break;
            }
        });
}

function updateClockRxJS(): void {
    const clockElement = document.getElementById('Hora');
    if (!clockElement) {
      console.error('No se encontró el elemento con ID "Hora".');
      return;
    }
    timer(0, 1000).subscribe(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    });
}
updateClockRxJS();