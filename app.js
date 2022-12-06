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
        return result;
    } else {
        return null;
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    console.log('Game Start')
    for(let i = 0; i < 5; i++) {
        let userChoice = prompt("Please type one of the following: rock | paper | scissors");
        let result = playRound(userChoice, getComputerChoice());
        console.log(`Round ${i + 1}`)
        if (result === null) { //invalid input
            console.log(`Invalid input, please try again`);
            i--;
        } else { //valid input
            switch(result) {
                case roundResult.WIN:
                    console.log(`Player Wins`);
                    userScore++;
                    break;
                case roundResult.LOSE:
                    console.log(`Computer Wins`);
                    computerScore++;
                    break;
                default:
                    console.log(`Tie`);
                    break;
            }
            console.log(`Current score: ${userScore} | ${computerScore}`);
        }
    }

    let result;
    if (userScore > computerScore) {
        result = 'User wins'
    } else if (userScore < computerScore) {
        result = 'Computer wins'
    } else {
        result = 'Tie'
    }
    console.log(`Final score: ${userScore} | ${computerScore}`)
    console.log(`Result: ${result}`)
}