let label = document.querySelector(".label");
let restartBtn = document.querySelector(".restart");
let square1 = document.getElementById(1);
let square2 = document.getElementById(2);
let square3 = document.getElementById(3);
let square4 = document.getElementById(4);
let square5 = document.getElementById(5);
let square6 = document.getElementById(6);
let square7 = document.getElementById(7);
let square8 = document.getElementById(8);
let square9 = document.getElementById(9);

let player = "X";
let winner;

function chooseSquare(id) {
  let square = document.getElementById(id);

  if (winner) return;
  if (square.innerHTML) return;

  square.innerHTML = player;

  player = player === "X" ? "O" : "X";

  label.innerHTML = `Player ${player}`;

  checkAll();
}

function checkAll() {
  checkWinner(square1, square2, square3) &&
    checkWinner(square4, square5, square6) &&
    checkWinner(square7, square8, square9) &&
    checkWinner(square1, square4, square7) &&
    checkWinner(square2, square5, square8) &&
    checkWinner(square3, square6, square9) &&
    checkWinner(square1, square5, square9) &&
    checkWinner(square3, square5, square7);
}

function checkWinner(squareA, squareB, squareC) {
  if (checkSequence(squareA, squareB, squareC)) {
    changeSquareColor(squareA, squareB, squareC);
    setWinner(squareA);
    return false;
  }
  return true;
}

function setWinner(square) {
  winner = square.innerHTML;
  label.style.color = "#0f0";
  label.style.fontWeight = "bold";
  label.innerHTML = `${winner} is the winner!`;

  restartBtn.style.background = "#0d0";
  restartBtn.innerHTML = "Play again";
}

function changeSquareColor(squareA, squareB, squareC) {
  squareA.style.background = "#0f0";
  squareB.style.background = "#0f0";
  squareC.style.background = "#0f0";
}

function checkSequence(squareA, squareB, squareC) {
  return (
    squareA.innerHTML &&
    squareA.innerHTML === squareB.innerHTML &&
    squareB.innerHTML === squareC.innerHTML
  );
}

function restart() {
  for (let i = 1; i <= 9; i++) {
    let square = document.getElementById(i);
    square.style.background = "#eee";
    square.innerHTML = "";
  }

  restartBtn.style.background = "#ccc";
  restartBtn.innerHTML = "Restart";

  changePlayer("X");
}
