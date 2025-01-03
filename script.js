let humanScore = 0;
let computerScore = 0;
let gameOptions = document.querySelector('#options');
let roundScore = document.querySelector('#roundScore');
let gameStatus = document.querySelector('#gameStatus');

function printGameStatus () {
    if(humanScore === 5) {
        gameStatus.textContent = "GAME OVER! Human won. Computer score was " + computerScore + " and the human score was " + humanScore;
    } else if (computerScore === 5) {
        gameStatus.textContent = "GAME OVER! Computer won. Computer score was " + computerScore + " and the human score was " + humanScore;
    } else {
        gameStatus.textContent = "Current score is: Computer " + computerScore + " and the human " + humanScore;
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "scissors"
            break
    }
}

function playRound (humanChoice, computerChoice) {
    if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        roundScore.textContent = "You lose! Rock beats scissors";
        printGameStatus();
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        roundScore.textContent = "You win! Scissors beats paper";
        printGameStatus();
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        roundScore.textContent = "It's a draw! Scissors equals scissors";
        printGameStatus();
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        roundScore.textContent = "You lose! Paper beats rock";
        printGameStatus();
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        roundScore.textContent = "You win! Rock beats scissors";
        printGameStatus();
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        roundScore.textContent = "It's a draw! Rock equals rock";
        printGameStatus();
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        roundScore.textContent = "You win! Paper beats rock";
        printGameStatus();
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        roundScore.textContent = "You lose! Scissors beats paper";
        printGameStatus();
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        roundScore.textContent = "It's a draw! Paper equals paper";
        printGameStatus();
    }
}

gameOptions.addEventListener('click', (event) => {
    if (humanScore === 5 || computerScore === 5) {
        return;
    }
    let target = event.target;
    switch (target.id) {
        case 'rock':
            playRound('rock',getComputerChoice());
            break;
        case 'paper':
            playRound('paper',getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors',getComputerChoice());
            break;
    }
});