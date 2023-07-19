import Calculator from "./calculator.js";

const calculator = new Calculator()

const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
const operation = document.querySelector('.operation')

buttons.addEventListener('click', onClick)

function onClick(event) {
    if(event.target.tagName !== 'BUTTON') return

    const { textContent: value } = event.target
    
    calculator.compute(value)

    updateDisplay()
}

function updateDisplay() {
    current.textContent = calculator.current
    previous.textContent = calculator.previous
    operation.textContent = calculator.operation
}
