/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    let last = Infinity
    while (num !== 1) {
        last = num
        if (!(num % 2)) num /= 2
        if (!(num % 3)) num /= 3
        if (!(num % 5)) num /= 5
        if (num === last) return false
    }
    return true
};