const gameboard = document.getElementById("gameboard");
const restartBtn = document.getElementById("restartBtn");
const winnerText = document.getElementById("winnerText");

let currentPlayer = "X";

gameboard.addEventListener("click", handleBoxClick);

function handleBoxClick(event) {
  const clickedBox = event.target;

  if (!clickedBox.textContent) {
    clickedBox.textContent = currentPlayer;


if (checkWinner()) {
  winnerText.textContent = `Player ${currentPlayer} wins!`;
  setTimeout(resetGame, 5000); 
} 
else if (checkTie()) {
  winnerText.textContent = "It's a draw!";
  setTimeout(resetGame, 5000); 
} 
else {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("playerText").textContent = `Player ${currentPlayer}'s turn`;
}

  }
}




function checkWinner() {
  const boxes = document.querySelectorAll(".box");

  for (let i = 0; i < 3; i++) {
    if (
      boxes[i * 3].textContent &&
      boxes[i * 3].textContent === boxes[i * 3 + 1].textContent &&
      boxes[i * 3 + 1].textContent === boxes[i * 3 + 2].textContent
    ) {
      return true;
    }

    if (
      boxes[i].textContent &&
      boxes[i].textContent === boxes[i + 3].textContent &&
      boxes[i + 3].textContent === boxes[i + 6].textContent
    ) {
      return true;
    }
  }

  if (
    boxes[0].textContent &&
    boxes[0].textContent === boxes[4].textContent &&
    boxes[4].textContent === boxes[8].textContent
  ) {
    return true;
  }

  if (
    boxes[2].textContent &&
    boxes[2].textContent === boxes[4].textContent &&
    boxes[4].textContent === boxes[6].textContent
  ) {
    return true;
  }

  return false;
}

function checkTie() {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    if (!box.textContent) {
      return false;
    }
  }

  return true;
}

// Function to reset the game
function resetGame() {
  const boxes = document.querySelectorAll(".box");

  for (const box of boxes) {
    box.textContent = "";
  }

  currentPlayer = "X";
  document.getElementById("playerText").textContent = "Player X's turn";
  winnerText.textContent = ""; // Clear the winner text
}

restartBtn.addEventListener("click", resetGame);
