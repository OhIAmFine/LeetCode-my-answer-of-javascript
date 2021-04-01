/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  if (board === null || board.length == 0) return
  const isValid = (board, row, col, c) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] !== '.' && board[row][i] == `${c}`) return false
      if (board[i][col] != '.' && board[i][col] == `${c}`) return false
      if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] !== '.' && board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === `${c}`) return false
    }
    return true
  }
  const solve = () => {
    const len = board.length
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (board[i][j] === '.') {
          for (let c = 1; c <= 9; c++) {
            if (isValid(board, i, j, c)) {
              board[i][j] = `${c}`
              if (solve()) {
                return true
              } else {
                board[i][j] = '.'
              }
            }
          }
          return false
        }
      }
    }
    return true
  }
  solve()
  return board
}
