/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let len = nums.length
  for (let i = 0; i < len;) {
    if (nums[i] === 0) {
      nums[nums.length] = 0
      nums.splice(i, 1)
      len--
    } else {
      i++
    }
  }
}