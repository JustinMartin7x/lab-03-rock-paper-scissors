//compare random throws to user input
export function doesUserWin(userGuess, randomThrow) {
    if (userGuess === randomThrow) {
        return 'draw';
    }
    if (userGuess === 'scissors' && randomThrow === 'paper'){
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