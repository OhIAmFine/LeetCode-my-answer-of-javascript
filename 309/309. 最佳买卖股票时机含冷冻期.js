/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length;
    let dp = Array(len).fill(0).map(v => Array(3).fill(0));
    dp[0][0] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
        dp[i][2] = dp[i - 1][1];
    }
    return dp[len - 1][1];
};