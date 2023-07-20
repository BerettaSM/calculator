const clock = document.querySelector('.time');

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function mapMouseXOffset(pos) {
    const isNegative = pos < 0;
    const result = scale(
        Math.abs(pos),
        0,
        document.documentElement.clientWidth / 2,
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
        document.documentElement.clientHeight / 2,
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
