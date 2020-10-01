// import functions and grab DOM elements
import {
    randomThrow,
    doesUserWin
} from './check-results.js';

import {
    updateDOM,
    resetDOM,
    gameResults
} from './update-DOM.js';

const readyButton = document.getElementById('ready');
const resetButton = document.getElementById('reset');

readyButton.addEventListener('click', () => {

    const userGuess = document.querySelector('input[name="choice"]:checked').value;
    const random = randomThrow();

    const answer = doesUserWin(userGuess, random);

    gameResults(answer);

    updateDOM();

});

resetButton.addEventListener("click", () => {

    // reset state
    // track number of resets
    resetDOM();

});

