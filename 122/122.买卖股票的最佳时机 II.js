// 贪心算法

var maxProfit = function (prices) {
  let profilt = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profilt += prices[i + 1] - prices[i]
      continue
    }
  }
  return profilt
}