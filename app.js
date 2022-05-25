const startGameBtn = document.getElementById("start-game-btn");

//? startGame() this works only in function declaration!

// const start = function () {
//   console.log("game is starting.......");
// };

// start();

// console.dir(start);

// const person = {
//   greet: function greet() {
//     console.log("hello there");
//   },
// };

// ? person.greet(); functions created in objects are called methods. Here in our example addEventListener actually is a method, as it locates
// ? within object!

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?, ""`
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (computersChoice, playersChoice) {
  if (computersChoice === playersChoice) {
    return RESULT_DRAW;
  } else if (
    (computersChoice === ROCK && playersChoice === PAPER) ||
    (computersChoice === PAPER && playersChoice === SCISSORS) ||
    (computersChoice === SCISSORS && playersChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("game is starting.......");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerSelection);
  console.log(winner);
});
