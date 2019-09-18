var solveNQueens = function (n) {
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
  const printRe = (res) => {
    return res.map(vals => {
      return vals.map((val) => {
        let str = ''
        for(let i = 0; i < n; i ++){
          if(val === i) str += 'Q'
          else str += '.'
        }
        return str
      })
    })
  }
  solveQueen(0, [])
  return printRe(res)
}
console.log(solveNQueens(4))