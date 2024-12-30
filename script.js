let humanScore = 0;
let computerScore = 0;

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
        console.log("You lose! Rock beats scissors");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("You win! Scissors beats paper")
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "scissors" && humanChoice === "scissors") {
        console.log("It's a draw! Scissors equals scissors");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("You lose! Paper beats rock");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("You win! Rock beats scissors");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("It's a draw! Rock equals rock");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        console.log("You win! Paper beats rock");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("You lose! Scissors beats paper");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    } else if (computerChoice === "paper" && humanChoice === "paper") {
        console.log("It's a draw! Paper equals paper");
        console.log("Current score is: Computer " + computerScore + " and the human " + humanScore);
    }
}

function playGame () {
    let _humanChoice;

    for (i = 1; i < 6 ; i++) {
        _humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        let _computerChoice = getComputerChoice();
        playRound(_humanChoice, _computerChoice);
        console.log("There are " + (5 -i) + " rounds left");
    }

    if (computerScore > humanScore) {
        console.log("Game over! Computer won!");
    } else if (computerScore == humanScore) {
        console.log("It's a draw");
    } else {
        console.log("Game over! You won!");
    }
}