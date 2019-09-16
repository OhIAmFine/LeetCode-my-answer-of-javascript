var myPow = function(x, n) {
  if(n === 1) return x
  if(n === 0) return 1
  if(n < 0) {
    n = -n
    x = 1 / x
  }
  if(n % 2 === 1) return x * myPow(x * x, parseInt(n / 2))
  return myPow(x * x, parseInt(n / 2))
};