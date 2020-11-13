/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rowSet = new Set()
  let colSet = new Set()
  let rowLen = matrix.length
  let colLen = matrix[0].length
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (matrix[i][j] == 0) {
        rowSet.add(i)
        colSet.add(j)
      }
    }
  }
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}
