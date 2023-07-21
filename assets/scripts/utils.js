import { clock, xCenter, yCenter, greatestOffset } from './constants.js';

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function mapMouseXOffset(pos) {
    const isNegative = pos < 0;
    const result = scale(
        Math.abs(pos),
        0,
        xCenter,
        0,
        15
    );
    return isNegative ? result * -1 : result;
}

export function mapMouseYOffset(pos) {
    const isNegative = pos < 0;
    const result = scale(
        Math.abs(pos),
        0,
        yCenter,
        0,
        15
    );
    return isNegative ? result * -1 : result;
}

export function updateClock() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
    clock.textContent = formattedTime;
    setTimeout(updateClock, 1000);
}

export function randomNumber(min,  max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export function randomTranslate() {
    const isNegativeTranslate = randomNumber(0, 1) === 0;
    let translateValue = randomNumber(greatestOffset + 50, greatestOffset + 200);
    translateValue = isNegativeTranslate ? translateValue * -1 : translateValue;
    return `${translateValue}px`;
}