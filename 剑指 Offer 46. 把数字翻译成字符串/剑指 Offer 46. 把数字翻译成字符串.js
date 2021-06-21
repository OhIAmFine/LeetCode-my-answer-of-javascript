/**
 * @param {number} num
 * @return {number}
 */
const translateNum = (num) => {
  const str = num.toString()
  const n = str.length

  const dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i < n + 1; i++) {
    const temp = Number(str[i - 2] + str[i - 1])
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }

  return dp[n]
}