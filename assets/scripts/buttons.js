import { randomTranslate } from './utils.js';

const buttonObjects = [
    {
        text: 'AC',
        className: 'top',
        codes: ['KeyC'],
    },
    {
        text: 'C',
        className: 'top',
        codes: ['Backspace'],
    },
    {
        text: '%',
        className: 'top',
    },
    {
        text: '÷',
        className: 'side',
        codes: ['NumpadDivide', 'Slash'],
    },
    {
        text: '7',
        codes: ['Digit7', 'Numpad7'],
    },
    {
        text: '8',
        codes: ['Digit8', 'Numpad8'],
    },
    {
        text: '9',
        codes: ['Digit9', 'Numpad9'],
    },
    {
        text: '×',
        className: 'side',
        codes: ['NumpadMultiply'],
    },
    {
        text: '4',
        codes: ['Digit4', 'Numpad4'],
    },
    {
        text: '5',
        codes: ['Digit5', 'Numpad5'],
    },
    {
        text: '6',
        codes: ['Digit6', 'Numpad6'],
    },
    {
        text: '-',
        className: 'side',
        codes: ['NumpadSubtract', 'Minus'],
    },
    {
        text: '1',
        codes: ['Digit1', 'Numpad1'],
    },
    {
        text: '2',
        codes: ['Digit2', 'Numpad2'],
    },
    {
        text: '3',
        codes: ['Digit3', 'Numpad3'],
    },
    {
        text: '+',
        className: 'side',
        codes: ['NumpadAdd'],
    },
    {
        text: '0',
        className: 'zero',
        codes: ['Digit0', 'Numpad0'],
    },
    {
        text: '.',
        codes: ['Period', 'NumpadDecimal'],
    },
    {
        text: '=',
        className: 'side',
        codes: ['Equal', 'Enter'],
    },
];

function createButton(buttonData) {
    const { text, className, codes } = buttonData;
    const button = document.createElement('button');
    button.textContent = text;
    if (className) button.className = className;
    if (codes) button.setAttribute('data-keycodes', codes);
    button.setAttribute(
        'style',
        `--rnd-tns-x: ${randomTranslate()}; --rnd-tns-y: ${randomTranslate()};`
    );
    return button;
}

export default function createButtons(targetElement) {
    for (const buttonObj of buttonObjects) {
        const buttonEl = createButton(buttonObj);
        targetElement.appendChild(buttonEl);
    }
}
