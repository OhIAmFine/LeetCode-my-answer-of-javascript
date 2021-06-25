/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const res = new Array(n)
  res[0] = 1

  let ptr2 = 0,
    ptr3 = 0,
    ptr5 = 0

  for (let i = 1; i < n; ++i) {
    res[i] = Math.min(res[ptr2] * 2, res[ptr3] * 3, res[ptr5] * 5)
    if (res[i] === res[ptr2] * 2) ++ptr2
    if (res[i] === res[ptr3] * 3) ++ptr3
    if (res[i] === res[ptr5] * 5) ++ptr5
  }

  return res[n - 1]
}