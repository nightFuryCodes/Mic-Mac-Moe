export function checkWinner(board, size){

for (let i = 0; i < size; i++) {
    const symbol = board[i][0];
    if (symbol) {
      let winner = true;
      for (let j = 1; j < size; j++) {
        if (symbol != board[i][j]) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbol;
      }
    }
  }


  for (let j = 0; j < size; j++) {
    const symbol = board[0][j];
    if (symbol) {
      let winner = true;
      for (let i = 1; i < size; i++) {
        if (symbol != board[i][j]) {
          winner = false;
          break;
        }
      }
      if (winner) {
        return symbol;
      }
    }
  }


  let symbol = board[0][0];
  let winner = true;
  if (symbol) {
    for (let i = 1; i < size; i++) {
      if (symbol != board[i][i]) {
        winner = false;
        break;
      }
    }
    if (winner) {
      return symbol;
    }
  }


  symbol = board[0][size - 1];
  winner = true;
  if (symbol) {
    for (let i = 1; i < size; i++) {
      if (symbol != board[i][size - 1 - i]) {
        winner = false;
        break;
      }
    }
    if (winner) {
      return symbol;
    }
  }
  return null;
}

export function initial(size){
    return Array.from({length: size},()=>{
        return Array(size).fill(null);
    })
}


