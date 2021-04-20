/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const h = board.length, w = board[0].length
  const visited = new Array(h).fill(0).map(() => new Array(w).fill(false))
  const directions = [[0,1], [0, -1], [1, 0], [-1, 0]]
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const flag = dfs(i, j, 0)
      if (flag) return true
    }
  }
  return false

  function dfs (i, j, k) {
    if (board[i][j] !== word.charAt(k)) return false
    else if (k === word.length - 1) return true
    visited[i][j] = true
    let res
    for(let [l, r] of directions) {
      const newI = i + l, newJ = j + r
      if(newI >= 0 && newI < h && newJ >= 0 && newJ < w) {
        if(!visited[newI][newJ]) {
          res = dfs(newI, newJ, k + 1)
          if(res) break
        }
      }
    }
    visited[i][j] = false
    return res
  }
}