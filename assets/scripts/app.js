import Calculator from "./calculator.js";
import createButtons from "./buttons.js";


const buttonsContainer = document.querySelector('.buttons')
createButtons(buttonsContainer)

window.addEventListener('keydown', onKeyPress)
buttonsContainer.addEventListener('click', onClick)

const calculator = new Calculator()

function onKeyPress(event) {
    const { code } = event;
    const button = buttonsContainer.querySelector(`button[data-keycodes*=${code}]`)
    console.log(button)
    if(!button) return
    const input = button.textContent
    processInput(input)
}

function onClick(event) {
    if(event.target.tagName !== 'BUTTON') return
    const { textContent: input } = event.target
    processInput(input)
}

function processInput(input) {
    if(calculator.current === '0' && calculator.operation === '÷' && input === '=') {
        // 'Delete' code for meltdown
        return triggerMeltdown()
    }
    calculator.compute(input)
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