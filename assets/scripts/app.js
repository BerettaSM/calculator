import createButtons from './buttons.js';
import { onKeyDown, onClick, calculateFramePosition } from './events.js';
import { updateClock } from './utils.js';

const buttonsContainer = document.querySelector('.buttons');

buttonsContainer.addEventListener('click', onClick);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('mousemove', calculateFramePosition);

createButtons(buttonsContainer);
updateClock();
