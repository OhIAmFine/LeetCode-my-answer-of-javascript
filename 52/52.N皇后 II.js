// var totalNQueens = function(n) {
//   const res = []
//   const col = new Set()
//   const pie = new Set()
//   const na = new Set()
//   const solveQueen = (level, curState) => {
//     if (level >= n) {
//       res.push(curState)
//     }
//     for (let i = 0; i < n; i++) {
//       if (col.has(i) || pie.has(level + i) || na.has(level - i)) {
//         continue
//       }
//       col.add(i)
//       pie.add(level + i)
//       na.add(level - i)
//       solveQueen(level + 1, [...curState, i])
//       col.delete(i)
//       pie.delete(level + i)
//       na.delete(level - i)
//     }
//   }
//   solveQueen(0, [])
//   return res.length
// };

// 第二种解法
var totalNQueens = function (n) {
    let count = 0
    const DFS = (level, col, pie, na) => {
        if (level >= n) {
            count++
            return
        }
        let baits = (~(col | pie | na)) & ((1 << n) - 1)
        while (baits > 0) {
            const p = baits & -baits
            DFS(level + 1, col | p, (pie | p) << 1, (na | p) >> 1)
            baits &= baits - 1
        }
    }
    DFS(0, 0, 0, 0)
    return count
}
console.log(totalNQueens(4))