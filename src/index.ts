let input: string = '0';
let operator: string = '';
let previousInput: string = '';

function calcDisplay(values: string): void {
    let update = false;

    if (['+', '-', '*', '/'].includes(values)) {
        if (input !== '0' && input !== '') {
            if (previousInput !== '0' && previousInput !== '') {

            } else {
                update = true;
                input += values;
            }
        }
    } 
    else {
        update = true;
        if (values === '.' && input.includes('.')) {
            update = false;
        } else if (input === '0' && values !== '.') {
            input = values;
        }
        else if (values === "delete"){
            deleteLast();
            update = false;
        }
        else if(values === "clear"){
            input = '';
        } else {
            input += values;
        }
    }
    if (update) {
        if (values !== "clear" && values !== "delete"){
            updateScreen();
        }
    }
}

function updateScreen(): void {
    const display = document.getElementById('screen') as HTMLInputElement;
    if (display) {
        display.value = input;
    } else {
        console.error('No se encontró el elemento con ID "screen".');
    }
}

function deleteLast(): void {
    if (Number(input) > 1){
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
        const target = event.target as HTMLButtonElement;
        const value = target.value;

        calcDisplay(value);
    });
});