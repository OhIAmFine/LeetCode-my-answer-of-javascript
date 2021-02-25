/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0
    for (let center = 0; center < s.length * 2 - 1; center++) {
        let left = Math.floor(center / 2)
        let right = Math.floor(left + center % 2)
        while (right < s.length && left >= 0 && s.charAt(left) === s.charAt(right)) {
            left--
            right++
            count++
        }
    }
    return count
};