var maxProfit = function (k, prices) {
  const MP = []

  for (let i = 0; i < prices.length; i++) {
    MP[i] = new Array()
    for (let j = 0; j < k; j++) {
      MP[i][j] = new Array()
      MP[i][j][0] = -Infinity
      MP[i][j][1] = -Infinity
    }
  }
  MP[0][0][0] = prices[0]
  MP[0][0][1] = -Infinity
  for (let i = 1; i < k; i++) {
    MP[0][i][0] = prices[0]
    MP[0][i][1] = -Infinity
  }
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < k; j++) {
      MP[i][j][0] = Math.max(MP[i - 1][j][0], MP[i - 1][j - 1][1] + prices[i])
      MP[i][j][1] = Math.max(MP[i - 1][j][1], MP[i - 1][j - 1][0] - prices[i])
    }
  }
}

maxProfit(2, [3,2,6,5,0,3])