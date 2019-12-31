/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        const index = s.length - i - 1
        const temp = s[i]
        s[i] = s[index]
        s[index] = temp
    }
    return s
};