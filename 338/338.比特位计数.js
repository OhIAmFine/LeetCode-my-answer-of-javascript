var countBits = function (num) {
  if (!num) return [0]
  let res = new Array(num).fill(0)
  for (let i = 1; i <= num; i++) {
    res[i] = res[i & (i - 1)] + 1
  }
  return res
}