var generateParenthesis = function (n) {
  const result = []
  const genStr = (str, left, right) => {
    if (!right && !left) {
      result.push(str)
    }
    if (left) {
      genStr(str + '(', left - 1, right)
    }
    if (right > left && right) {
      genStr(str + ')', left, right - 1)
    }
  }
  genStr('', 3, 3)
  return result
}
