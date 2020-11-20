var coinChange = function (coins, amount) {
  let max = amount + 1
  let DP = new Array(max).fill(Infinity)
  DP[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        DP[i] = Math.min(DP[i], DP[i - coins[j]] + 1)
      }
    }
  }
  return DP[amount] > amount ? -1 : DP[amount]
}
