import calculator from './calculator.js';
import { mapMouseXOffset, mapMouseYOffset } from './utils.js';

import {
    buttons,
    current,
    previous,
    operation,
    frame,
    display,
    xCenter,
    yCenter,
} from './constants.js';

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
        return triggerVanish();
    }
    calculator.compute(input);
    updateDisplay();
}

function updateDisplay() {
    current.textContent = calculator.current;
    previous.textContent = calculator.previous;
    operation.textContent = calculator.operation;
}

export function calculateFramePosition(event) {
    const { clientX, clientY } = event;
    const offsetX = mapMouseXOffset(xCenter - clientX);
    const offsetY = mapMouseYOffset(yCenter - clientY);
    frame.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function triggerVanish() {
    display.textContent = 'WHAT HAVE YOU DONE?!'
    buttons.removeEventListener('click', onClick);
    window.removeEventListener('mousemove', calculateFramePosition);
    frame.addEventListener('animationend', () => frame.remove());
    setTimeout(() => {
        frame.style.animation = `vanish 0.7s 1 ease-in-out forwards`;
    }, 1500);
}
