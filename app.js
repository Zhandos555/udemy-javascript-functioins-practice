const startGameBtn = document.getElementById("start-game-btn");

//? startGame() this works only in function declaration!

const start = function () {
  console.log("game is starting.......");
};

start();

console.dir(start);

// const person = {
//   greet: function greet() {
//     console.log("hello there");
//   },
// };

// ? person.greet(); functions created in objects are called methods. Here in our example addEventListener actually is a method, as it locates
// ? within object!

startGameBtn.addEventListener("click", start);
