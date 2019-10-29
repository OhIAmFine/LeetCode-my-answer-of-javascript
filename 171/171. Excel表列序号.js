/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  if (!s) return 0
  const base = 64
  let res = 0
  let len = s.length - 1
  for (let i = 0; i < s.length; i++, len--) {
    const code = s[i].charCodeAt() - base
    res += Math.pow(26, len) * code
  }
  return res
}