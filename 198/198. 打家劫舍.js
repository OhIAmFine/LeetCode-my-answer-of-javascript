/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(dp[0], nums[1])
  for (let i = 2; i < nums.length; i++)  dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  return dp[nums.length - 1]
};