/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let res = n
    while (res !== 1) {
        res = res.toString().split("").map(Number).reduce((sum, val) => sum + Math.pow(val, 2), 0)
        if (res === 4) return false
    }
    return true
};