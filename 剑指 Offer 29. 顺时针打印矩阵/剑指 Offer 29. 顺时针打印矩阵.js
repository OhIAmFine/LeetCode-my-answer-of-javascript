/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return []
  const res = []
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) res.push(matrix[top][i])
    for (let i = top; i < bottom; i++) res.push(matrix[i][right])
    for (let i = right; i > left; i--) res.push(matrix[bottom][i])
    for (let i = bottom; i > top; i--) res.push(matrix[i][left])
    top++
    left++
    right--
    bottom--
  }
  if (left === right) {
    for (let i = top; i <= bottom; i++) res.push(matrix[i][left])
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
  }
  return res
}