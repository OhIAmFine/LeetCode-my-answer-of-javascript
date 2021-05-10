/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (!s) return false
  let hasNum = false
  let hasDot = false
  let hasE = false
  let isEe = t => t === 'e' || t === 'E'
  let isAs = t => t === '+' || t === '-'
  s = s.trim()                      // 0. 去除首尾空格
  for (let i = 0; i < s.length; i++) {
    let t = s[i]
    if (t === ' ') {                // 1. 空格
      return false
    } else if (t >= 0 && t <= 9) {  // 2. 数字
      hasNum = true
    } else if (t === '.') {         // 3. 小数点
      if (hasDot || hasE) return false
      hasDot = true
    } else if (isEe(t)) {           // 4. e 或者 E
      if (!hasNum || hasE) return false
      hasE = true
      hasNum = false                // 防止eE后没有数字了
    } else if (isAs(t)) {           // 5. + - 符号
      if (i > 0 && !isEe(s[i - 1])) return false
    } else {
      return false
    }
  }
  return hasNum
}
