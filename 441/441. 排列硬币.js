/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    return Math.floor(Math.sqrt(2) * Math.sqrt(n + 0.125) - 0.5)
};