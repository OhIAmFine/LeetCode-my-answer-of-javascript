var mySqrt = function (x) {
  let res = 0
  while (res * res < x) {
    res++
    if(res * res > x) return res - 1
  }
  return res
}
console.log(mySqrt(4))
