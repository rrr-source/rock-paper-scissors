// Declaring variables
let words = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

//Initializing the random choice of a computer
function getComputerChoice() {
    let number = Math.floor(Math.random() * words.length);
    let word = words[number];
    return word;
}

//Setting up the logic of every round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return (`"You win! Scissors beats Paper! You get ${playerScore += 1} point!"`);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `"You win! Rock beats Scissors! You get ${playerScore += 1} point!"`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `"You win! Paper beats Rock! You get ${playerScore += 1} point!"`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `"You lost! Paper beats Rock! I get ${computerScore += 1} point!"`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `"You lost! Rock beats Scissors! I get ${computerScore += 1} point!"`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `"You lost! Paper beats Rock! I get ${computerScore += 1} point!"`;
    } else {
        (playerSelection === computerSelection);
        return "It's a draw! Try once more!";
    }
}

//Setting up the results
function roundResult(playerScore, computerScore) {
    if (playerScore == 3 || computerScore == 3) {
        if (playerScore > computerScore) {
            return "Congratulations, you are the Winner!";
        } else {
            return "Unfortunately, you lost! Try again.";
        }
    }
}

//Testing for now, because prompt does not work in Chrome...
const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(roundResult(playerScore, computerScore));