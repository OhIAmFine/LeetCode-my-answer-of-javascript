/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let store = new Set()
  let res = 0
  let left = 0
  for (let i = 0; i < s.length; i++) {
    if (i != 0) store.delete(s[i - 1])
    while (left < s.length && !store.has(s[left])) {
      store.add(s[left])
      left++
    }
    res = Math.max(res, left - i)
  }
  return res
}