import Calculator from "./calculator.js";

const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', onClick)

const calculator = new Calculator()

function onClick(event) {
    if(event.target.tagName !== 'BUTTON') return
    const { textContent: value } = event.target
    if(calculator.current === '0' && calculator.operation === '÷' && value === '=') {
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

function triggerMeltdown() {
    console.log('meltdown triggered')
    buttons.removeEventListener('click', onClick)
}