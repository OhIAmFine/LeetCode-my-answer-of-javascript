/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  var obj = {}
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]] += 1
    } else {
      obj[s[i]] = 1
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]] > 0) {
      obj[t[i]] -= 1
      continue
    }
    if (obj[t[i]] === 0) {
      delete obj[t[i]]
      continue
    }
    if (!obj[t[i]]) return false
  }
  return !Number(Object.values(obj).join(''))
}