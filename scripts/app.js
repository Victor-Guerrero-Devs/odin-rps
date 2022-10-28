const playerScoreEle = document.querySelector("#player-score");
const computerScoreEle = document.querySelector("#computer-score");
const computerImgEle = document.querySelector("#computer-image");
const playerImgEle = document.querySelector("#player-image");
const btnContainerEle = document.querySelector(".btn-container");
const gameMessageEle = document.querySelector("#game-message");

const backDropEle = document.querySelector("#backdrop");
const modalEle = document.querySelector("#modal");
const modalTextEle = document.querySelector("#modal-text");
const modalBtn = document.querySelector("#modal-btn");

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "scissors", "paper"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function toggleGameOverScreen() {
  backDropEle.style.display = "block";
  modalEle.style.display = "block";
}

function gameOver() {
  toggleGameOverScreen();
  const gameOverMessage =
    playerScore === 5 ? "Congratulations, you won!" : "Oh no! You lost!";
  modalTextEle.textContent = gameOverMessage;
}

function restartGame() {
  window.location.reload();
}

function btnHandler(e) {
  const playerChoice = e.target.dataset.btnChoice;

  runGame(playerChoice);
}

function playRound(computerSelection, playerSelection) {
  if (playerScore === 5 || computerScore === 5) {
    gameOver();
  }

  if (computerSelection === playerSelection) {
    gameMessageEle.textContent = `It's a tie! You both selected ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    gameMessageEle.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore++;
    gameMessageEle.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

function updateScore() {
  playerScoreEle.textContent = playerScore;
  computerScoreEle.textContent = computerScore;
}

function renderImage(compImg, playerImg) {
  computerImgEle.src = `../images/${compImg}.svg`;
  playerImgEle.src = `../images/${playerImg}.svg`;
}

function runGame(playerChoice) {
  const computerChoice = getComputerChoice();
  renderImage(computerChoice, playerChoice);
  playRound(computerChoice, playerChoice);
  updateScore();
}

btnContainerEle.addEventListener("click", btnHandler);
modalBtn.addEventListener("click", restartGame);
