/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const store = {}
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (!store[char]) store[char] = 1
    else store[char]++
  }

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (store[char] === 1) return char
  }

  return ' '
}