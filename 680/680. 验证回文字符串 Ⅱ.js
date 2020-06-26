/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, flag = true) {
  let l = 0, r = s.length - 1
  while (l < r && s[l] === s[r]) l++, r--
  if (r <= l) return true
  if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
  return false
}
