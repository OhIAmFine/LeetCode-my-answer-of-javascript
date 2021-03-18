/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let steps = 0
  let end = 0
  let maxPos = 0
  for (var i = 0; i < nums.length - 1; ++i) {
    maxPos = Math.max(maxPos, nums[i] + i)
    if (i == end) {
      end = maxPos
      ++steps
    }
  }
  return steps
};
