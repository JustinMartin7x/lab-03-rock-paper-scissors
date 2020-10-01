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