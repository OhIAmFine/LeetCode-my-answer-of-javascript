/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const map = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']
  let count = n
  let ans = ''
  while (count) {
    ans = map[count % 26] + ans
    count = count % 26 === 0 ? Math.floor(count / 26) - 1 : Math.floor(count / 26)
  }
  return ans
}