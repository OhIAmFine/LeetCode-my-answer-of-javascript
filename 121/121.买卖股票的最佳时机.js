// 动态规划

var maxProfit = function (prices) {
  if (!prices.length) return 0
  let res = 0
  let profit = new Array()
  for (let i = 0; i < prices.length; i++) {
    profit[i] = new Array()
    profit[i][0] = 0
    profit[i][1] = 0
    profit[i][2] = 0
  }
  profit[0][0] = 0
  profit[0][1] = -prices[0]
  profit[0][2] = 0
  for(let i = 1; i < prices.length; i ++) {
    profit[i][0] = profit[i - 1][0]
    profit[i][1] = Math.max(profit[i - 1][1], profit[i - 1][0]  - prices[i])
    profit[i][2] = profit[i - 1][1] + prices[i]
    res = Math.max(res, profit[i][0], profit[i][2])
  }
  return res
}

// 贪心算法
var maxProfit = function(prices) {
  let min = Infinity
  let index = -1
  let profilt = 0
  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < min) {
      min = prices[i]
      index = i
    }
    if(prices[i] > min && i > index) {
      const val = prices[i] - min
      if(val > profilt) profilt =val
    }
  }
  return profilt
};