var isPerfectSquare = function (num) {
  let res = 0
  while (res * res < num) {
    res++
    if (res * res === num && (res + 1) * (res + 1) > num) return true
  }
  return false
}