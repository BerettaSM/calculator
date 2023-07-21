import createButtons from './buttons.js';
import { onKeyDown, onClick, calculateFramePosition } from './events.js';
import { updateClock } from './utils.js';
import { buttons } from './constants.js';


buttons.addEventListener('click', onClick);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('mousemove', calculateFramePosition);

createButtons(buttons);
updateClock();
