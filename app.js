// import functions and grab DOM elements
const results = document.getElementById('results');
const readyButton = document.getElementById('ready');
const totalSpan = document.getElementById('total');
const percentSpan = document.getElementById('percent');
// const userGuessButton = document.querySelector(':checked');

import { randomThrow } from './utils.js';
import { doesUserWin } from './check-results.js';

// console.log(readyButton, totalSpan, percentSpan, userGuess);


// initialize state

let wins = 0;
let gamesPlayed = 0;
let gamesTied = 0;

// set event listeners to update state and DOM

readyButton.addEventListener('click', () => {


    gamesPlayed++;

    const userGuess = document.querySelector('input[name="choice"]:checked');
    const random = randomThrow();
// console.log(random);

    
    

    doesUserWin(userGuess.value, random); 

    if (doesUserWin === 'win') {
        results.textContent = 'Congratulations!! You Win';
        wins++;
    } if (doesUserWin === 'lose') {
        results.textContent = 'Oh No You Lose! try again!!';
    } if (doesUserWin === 'draw') {
        results.textContent = 'Arggg!! you tied!!';
        gamesTied++;
    }
    


    
    

// sees which one wins
// changes states



});


