let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

export function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
}

export function makeMove(index: number) {
  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

export function getGameBoard() {
  return gameBoard;
}
