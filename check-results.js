
export function randomThrow() {
    const thrown = Math.ceil(Math.random() * 3);

    if (thrown === 1) {
        return 'rock';
    }
    if (thrown === 2) {
        return 'paper';
    }
    if (thrown === 3) {
        return 'scissors';
    }
}

//compare random throws to user input
export function doesUserWin(userGuess, randomThrow) {

    if (userGuess === randomThrow) {
        return 'draw';
    }
    if (userGuess === 'scissors' && randomThrow === 'paper') {
        return 'win';
    }
    if (userGuess === 'scissors' && randomThrow === 'rock') {
        return 'lose';
    }
    if (userGuess === 'rock' && randomThrow === 'paper') {
        return 'lose';
    }
    if (userGuess === 'rock' && randomThrow === 'scissors') {
        return 'win';
    }
    if (userGuess === 'paper' && randomThrow === 'rock') {
        return 'win';
    }
    if (userGuess === 'paper' && randomThrow === 'scissors') {
        return 'lose';
    }

}