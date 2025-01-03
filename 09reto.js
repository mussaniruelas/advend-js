function moveTrain(board, mov) {
  let i = board.findIndex((t) => /[@]/.test(t));
  let j = board[i].indexOf("@");

  let li = board.length;
  let lj = board[i].length;
  

  switch (mov) {
    case "U":
      if (i - 1 < 0) return "crash";
      if (board[i - 1][j] == "o") return "crash";
      if (board[i - 1][j] == "·") return "none";
      if (board[i - 1][j] == "*") return "eat";
      break;

    case "R":
      if (j + 1 >= lj) return "crash";
      if (board[i][j + 1] == "o") return "crash";
      if (board[i][j + 1] == "·") return "none";
      if (board[i][j + 1] == "*") return "eat";
      break;

    case "D":
      if (i + 1 >= li) return "crash";
      if (board[i + 1][j] == "o") return "crash";
      if (board[i + 1][j] == "·") return "none";
      if (board[i + 1][j] == "*") return "eat";
      break;

    case "L":
      if (j - 1 < 0) return "crash";
      if (board[i][j - 1] == "o") return "crash";
      if (board[i][j - 1] == "·") return "none";
      if (board[i][j - 1] == "*") return "eat";
      break;

    default:
      return "crash";
      break;
  }
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, "R"));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
