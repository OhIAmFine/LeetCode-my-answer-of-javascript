var hammingWeight = function (n) {
  let count = 0
  while (n != 0) {
    count++
    n = n & (n - 1)
  }
  return count
}