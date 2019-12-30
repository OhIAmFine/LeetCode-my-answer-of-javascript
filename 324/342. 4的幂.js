/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    return /^10*$/.test(num.toString(4))
};