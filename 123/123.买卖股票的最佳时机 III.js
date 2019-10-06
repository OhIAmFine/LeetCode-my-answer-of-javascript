var maxProfit = function (prices) {
  if (!prices.length) return 0
  const MP = new Array(prices.length)
  for (let i = 0; i < prices.length; i++) {
    MP[i] = new Array()
    MP[i][0] = new Array()
    MP[i][1] = new Array()
    MP[i][2] = new Array()
  }
  MP[0][0][0] = 0
  MP[0][0][1] = -prices[0]
  MP[0][1][0] = -Infinity
  MP[0][1][1] = -Infinity
  MP[0][2][0] = -Infinity
  MP[0][2][1] = -Infinity
  for (let i = 1; i < prices.length; i++) {
    MP[i][0][0] = MP[i - 1][0][0]
    MP[i][0][1] = Math.max(MP[i - 1][0][1], MP[i - 1][0][0] - prices[i])

    MP[i][1][0] = Math.max(MP[i - 1][1][0], MP[i - 1][0][1] + prices[i])
    MP[i][1][1] = Math.max(MP[i - 1][1][1], MP[i - 1][1][0] - prices[i])

    MP[i][2][0] = Math.max(MP[i - 1][2][0], MP[i - 1][1][1] + prices[i])
  }
  const result = Math.max(MP[prices.length - 1][0][0], MP[prices.length - 1][1][0], MP[prices.length - 1][2][0])
  return result > 0 ? result : 0
}
console.log(maxProfit([2,1,4] ))
