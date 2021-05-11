/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let count = 0
  const len = nums.length

  for (let i = 0; i < len; i++) { if (nums[i] % 2 === 1) count++ }
  for (let i = 0; i < count;) {
    const num = nums[i]
    if (num % 2 === 0) {
      nums.push(num)
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums
}