/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0
    let right = num
    while (left < right - 1) {
        let mid = parseInt((right + left) / 2)
        if (mid * mid === num) return true
        if (mid * mid > num) {
            right = mid
        } else {
            left = mid
        }
    }
    return num === 1 ? true : false
};