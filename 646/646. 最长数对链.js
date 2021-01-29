/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs = pairs.sort((a, b) => a[0] - b[0])
    const len = pairs.length
    const dp = new Array(len).fill(1)
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
    return Math.max(...dp)
};