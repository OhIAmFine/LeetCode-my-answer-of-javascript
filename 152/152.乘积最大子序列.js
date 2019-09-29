var maxProduct = function (nums) {
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]
  let dp = new Array(nums.length).fill(1).map(() => [[1][0]])
  if (nums[0] >= 0) {
    dp[0][0] = nums[0]
    dp[0][1] = 0
  } else {
    dp[0][0] = 0
    dp[0][1] = nums[0]
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) {
      dp[i][0] = Math.max(dp[i - 1][0] * nums[i], nums[i])
      dp[i][1] = Math.min(dp[i - 1][1] * nums[i], nums[i])
    } else {
      dp[i][0] = Math.max(dp[i - 1][1] * nums[i], nums[i])
      dp[i][1] = Math.min(dp[i - 1][0] * nums[i], nums[i])
    }
  }

  return Math.max(...dp.map((arr) => arr[0]))
}

console.log(maxProduct([-2]))