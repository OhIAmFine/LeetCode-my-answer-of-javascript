/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let store = new Set()
    let res = 0
    let left = -1
    for (let i = 0; i < s.length; i++) {
        if (i != 0) {
            store.delete(s[i - 1])
        }
        while (left + 1 < s.length && !store.has(s[left + 1])) {
            store.add(s[left + 1])
            left++
        }
        res = Math.max(res, left - i + 1)
    }
    return res
};