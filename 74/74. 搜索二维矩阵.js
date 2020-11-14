/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0
  let left = 0
  let right = matrix.length
  while (left < right) {
    const mid = (left + right) >> 1
    if (matrix[mid][0] === target) return true
    else if (matrix[mid][0] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  if (left === 0) {
    return false
  } else {
    row = left - 1
    left = 0
    right = matrix[0].length
  }

  while (left < right) {
    const mid = (left + right) >> 1
    if (matrix[row][mid] === target) return true
    else if (matrix[row][mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return false
}