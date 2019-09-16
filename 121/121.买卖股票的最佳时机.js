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