/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (!nums.length) return 0
  let count = 1
  let temp = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      temp++
    } else {
      count = Math.max(temp, count)
      temp = 1
    }
  }
  return Math.max(temp, count)
}