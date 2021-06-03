/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ans = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!count) {
      ans = nums[i];
      count++;
    } else count += nums[i] === ans ? 1 : -1;
  }
  return ans;
};
