/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let res = 0
  while (n >= 5) {
    n = Math.floor(n / 5)
    res += n
    n = n
  }
  return res
}