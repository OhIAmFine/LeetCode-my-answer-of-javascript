/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 1 || n === 2) return 1
  if (n === 3) return 2
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i - j] * dp[j], dp[i])
    }
  }
  return dp[n]
}