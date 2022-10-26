let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "scissors", "paper"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// console.log(getComputerChoice());

function playGame(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return `It's a tie! You both selected ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  playerScore++;
  return `You win! ${playerSelection} beats ${computerSelection}`;
}

// console.log(playGame(computerChoice, playerChoice));

function game() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt(
      "Select between rock, paper, scissors"
    ).toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(playGame(computerChoice, playerChoice));
    displayScore();
  }

  if (computerScore === playerScore) {
    console.log("It's a tie!");
  } else if (computerScore > playerScore) {
    console.log(`You lose! The computer won ${computerScore} games out of 5`);
  } else {
    console.log(`You won! You took the victory ${playerScore} times out of 5`);
  }
}

function displayScore() {
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

game();
