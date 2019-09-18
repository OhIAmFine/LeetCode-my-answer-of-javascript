var totalNQueens = function(n) {
  const res = []
  const col = new Set()
  const pie = new Set()
  const na = new Set()
  const solveQueen = (level, curState) => {
    if (level >= n) {
      res.push(curState)
    }
    for (let i = 0; i < n; i++) {
      if (col.has(i) || pie.has(level + i) || na.has(level - i)) {
        continue
      }
      col.add(i)
      pie.add(level + i)
      na.add(level - i)
      solveQueen(level + 1, [...curState, i])
      col.delete(i)
      pie.delete(level + i)
      na.delete(level - i)
    }
  }
  solveQueen(0, [])
  return res.length
};
console.log(totalNQueens(4))