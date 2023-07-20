import Calculator from "./calculator.js";
import createButtons from "./buttons.js";


const buttonsContainer = document.querySelector('.buttons')
createButtons(buttonsContainer)

buttonsContainer.addEventListener('click', onClick)

const calculator = new Calculator()

function onClick(event) {
    if(event.target.tagName !== 'BUTTON') return
    const { textContent: value } = event.target
    if(calculator.current === '0' && calculator.operation === '÷' && value === '=') {
        // 'Delete' code for meltdown
        return triggerMeltdown()
    }
    calculator.compute(value)
    updateDisplay()
}

const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
const operation = document.querySelector('.operation')

function updateDisplay() {
    current.textContent = calculator.current
    previous.textContent = calculator.previous
    operation.textContent = calculator.operation
}

const time = document.querySelector('.time');

updateTime();

function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: "2-digit",
        minute: "2-digit"
    });
    time.textContent = formattedTime;
    setTimeout(updateTime, 1000);
}

function triggerMeltdown() {
    console.log('meltdown triggered')
    buttons.removeEventListener('click', onClick)
}