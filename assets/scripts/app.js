import createButtons from './buttons.js';
import { onKeyDown, onClick } from './events.js';
import { updateClock } from './utils.js';
import { buttons } from './constants.js';

buttons.addEventListener('click', onClick);
window.addEventListener('keydown', onKeyDown);

createButtons(buttons);
updateClock();
