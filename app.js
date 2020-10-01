// import functions and grab DOM elements
const results = document.getElementById('results');
const readyButton = document.getElementById('ready');
const totalSpan = document.getElementById('total');
const percentSpan = document.getElementById('percent');
const winsSpan = document.getElementById('wins');
const tied = document.getElementById('tied');
// const userGuessButton = document.querySelector(':checked');
import { randomThrow } from './randomThrow.js';
import { doesUserWin } from './check-results.js';
// console.log(readyButton, totalSpan, percentSpan, userGuess);
// initialize state
let totalWins = 0;
let gamesPlayed = 0;
let gamesTied = 0;
readyButton.addEventListener('click', () => {
    gamesPlayed++;
    const userGuess = document.querySelector('input[name="choice"]:checked').value;
    const random = randomThrow();
    // console.log(userGuess, random);
    const answer = doesUserWin(userGuess, random); 
    if (answer === 'win') {
        results.textContent = 'Congratulations!! You Win';
        totalWins++;
    } if (answer === 'lose') {
        results.textContent = 'Oh No You Lose! try again!!';
    } if (answer === 'draw') {
        results.textContent = 'Arggg!! you tied!!';
        gamesTied++;
    }
    const div = (totalWins / gamesPlayed);
    const percent = (div * 100).toFixed(0);
    winsSpan.textContent = `Wins! ${totalWins}`;
    totalSpan.textContent = `Total Games Played ${gamesPlayed}`;
    percentSpan.textContent = `${percent} % of Games Won!`;
    tied.textContent = `${gamesTied} Tied Games!`;
});


