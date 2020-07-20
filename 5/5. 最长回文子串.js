/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = ''
  let len = s.length
  const dp = Array.from(new Array(len), () => new Array(len).fill(0))
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }
  return res
}
