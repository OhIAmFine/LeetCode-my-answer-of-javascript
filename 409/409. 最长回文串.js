/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var store = {}
    for (let i = 0; i < s.length; i++) store[s[i]] = !store[s[i]] ? 1 : store[s[i]] + 1
    const res = Object.values(store).reduce((sum, val) => val % 2 === 0 ? sum + val : sum + val - 1, 0)
    return res === s.length ? res : res + 1
};