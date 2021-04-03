/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const reversedString = x.toString().split('').reverse().join('')
    if (x.toString() === reversedString) return true
    return false
};
