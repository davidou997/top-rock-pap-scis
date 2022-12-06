const move = {
    rock: 0,
    paper: 1,
    scissors: 2,
}

const roundResult = {
    WIN: 0,
    TIE: 1,
    LOSE: 2,
}

/**
 * Returns a random integer between 0 (inclusive) to 3 (exclusive)
 * @returns Integer
 */
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

/**
 * Takes the player seleciton and computer selection and returns a string indicating a win or loss for the player
 * 
 * @param {Number} playerSelection 
 * @param {Number} computerSelection 
 * @returns A number indicating a win, loss, or tie
 */
function playRound(playerSelection, computerSelection) {
    let playerSelectionName = playerSelection.toLowerCase();
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelectionName in move) {
        let playerSelectionVal = move[playerSelection.toLowerCase()]
        let val = playerSelectionVal - computerSelection;
        let result;

        if (val === 0) {
            result = roundResult.TIE;
        } else if (val === 1 || val === -2) {
            result = roundResult.WIN;
        } else {
            result = roundResult.LOSE;
        }
        console.log(result)
        return result;
    } else {
        console.log(`You cannot pick the move ${playerSelection}.`)
        return null;
    }
}