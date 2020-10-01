const totalSpan = document.getElementById('total');
const percentSpan = document.getElementById('percent');
const lossesSpan = document.getElementById("losses");
const winsSpan = document.getElementById('wins');
const tied = document.getElementById('tied');
const results = document.getElementById('results');
const resetSpan = document.getElementById('reset-counter');

// initialize state
let totalWins = 0;
let gamesPlayed = 0;
let gamesTied = 0;

// 
let reset = 0;

const losses = () => (gamesPlayed - totalWins);
const percent = () => Math.trunc((totalWins / gamesPlayed) * 100);

export function updateDOM() {
    winsSpan.textContent = `Wins! ${totalWins}`;
    lossesSpan.textContent = `Losses! ${losses()}`;
    totalSpan.textContent = `Total Games Played ${gamesPlayed}`;
    percentSpan.textContent = `${percent()} % of Games Won!`;
    tied.textContent = `${gamesTied} Tied Games!`;
}

export function resetDOM() {
    winsSpan.textContent = 'Wins! 0';
    lossesSpan.textContent = 'Losses! 0';
    tied.textContent = 'Ties 0';
    totalSpan.textContent = 'Total Games Played 0';
    percentSpan.textContent = '0% of Wins';

    resetSpan.textContent = `${reset} Times Reset`;
    reset++;

    totalWins = 0;
    gamesPlayed = 0;
    gamesTied = 0;
}

export function gameResults(answer) {
    gamesPlayed++;

    if (answer === 'win') {
        results.textContent = 'Congratulations!! You Win';
        totalWins++;
    } else if (answer === 'lose') {
        results.textContent = 'Oh No You Lose! try again!!';
    } else if (answer === 'draw') {
        results.textContent = 'Arggg!! you tied!!';
        gamesTied++;
    }
}