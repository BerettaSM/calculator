import { clock, greatestOffset } from './constants.js';

export function updateClock() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
    clock.textContent = formattedTime;
    setTimeout(updateClock, 1000);
}

export function randomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export function randomTranslate() {
    const isNegativeTranslate = randomNumber(0, 1) === 0;
    let translateValue = randomNumber(
        greatestOffset + 50,
        greatestOffset + 200
    );
    translateValue = isNegativeTranslate ? translateValue * -1 : translateValue;
    return `${translateValue}px`;
}
