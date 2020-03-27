/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if(num == 1) {
    return false;
  }
  let sum = 1; // 正整数一定会有一个1，同时不用考虑自身，所以单独处理
  let i = 2;
  const sqrt = Math.sqrt(num);
  for(;i < sqrt;i++) {
    if(num % i == 0) {
      sum += i;
      sum += num / i;
    }
  }
  // 此处单独处理的原因在于只需要加1次i值，如果在循环中会加2次
  if(i * i == num) {
    sum += i;
  }
  return sum == num;
};
