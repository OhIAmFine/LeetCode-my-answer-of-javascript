var maxProfit = function (k, prices) {
  var maxProfit = function (k, prices) {
    if (!k) return 0

    // 相当于不限次数，能赚钱的都加上
    if (k >= prices.length - 1) {
      let max = 0
      for (let i = 1; i < prices.length; i++) {
        let v = prices[i] - prices[i - 1]
        if (v > 0) max += v
      }
      return max
    }

    // 限制次数
    let nBuyNSell = new Array(k).fill(0)
    let nBuy = new Array(k).fill(Number.POSITIVE_INFINITY)

    for (let i = 0; i < prices.length; i++) {
      const p = prices[i]

      // 购买价格
      nBuy[0] = Math.min(nBuy[0], p)
      // 出售后的利润
      nBuyNSell[0] = Math.max(nBuyNSell[0], p - nBuy[0])

      for (let j = 1; j < k; j++) {
        // 第N次购买的投入，综合了前一次的利润
        nBuy[j] = Math.min(nBuy[j], p - nBuyNSell[j - 1])
        // 第N次出售的利润，因为算投入的时候综合了前一次的利润，所以这就是总利润
        nBuyNSell[j] = Math.max(nBuyNSell[j], p - nBuy[j])
      }
    }
    return nBuyNSell[nBuyNSell.length - 1]
  }
}

maxProfit(2, [3, 2, 6, 5, 0, 3])