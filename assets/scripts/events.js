import calculator from './calculator.js';
import { mapMouseXOffset, mapMouseYOffset } from './utils.js';

const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
const operation = document.querySelector('.operation');
const frame = document.querySelector('.frame');

export function onKeyDown(event) {
    const { code } = event;
    const button = event.target.querySelector(`button[data-keycodes*=${code}]`);
    if (!button) return;
    const input = button.textContent;
    processInput(input);
}

export function onClick(event) {
    if (event.target.tagName !== 'BUTTON') return;
    const { textContent: input } = event.target;
    processInput(input);
}

export function processInput(input) {
    if (
        calculator.current === '0' &&
        calculator.operation === '÷' &&
        input === '='
    ) {
        // 'Delete' code for meltdown
        // return triggerMeltdown()
        console.log('trigger meltdown here');
    }
    calculator.compute(input);
    updateDisplay();
}

function updateDisplay() {
    current.textContent = calculator.current;
    previous.textContent = calculator.previous;
    operation.textContent = calculator.operation;
}

const xCenter = document.documentElement.clientWidth / 2;
const yCenter = document.documentElement.clientHeight / 2;

export function calculateFramePosition(event) {
    const { clientX, clientY } = event;
    const offsetX = mapMouseXOffset(xCenter - clientX);
    const offsetY = mapMouseYOffset(yCenter - clientY);
    frame.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function triggerMeltdown() {
    console.log('meltdown triggered');
    buttonsContainer.removeEventListener('click', onClick);
}
