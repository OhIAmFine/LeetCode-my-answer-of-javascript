/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cur = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let r = 1; r < n; r++) {
      cur[r] = cur[r - 1] + cur[r]
    }
  }
  return cur[n - 1]
}
