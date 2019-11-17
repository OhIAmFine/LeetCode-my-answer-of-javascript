/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0
  const res = []
  res[0] = nums[0]
  res[1] = Math.max(res[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    res[i] = Math.max(res[i - 1], nums[i] + res[i - 2])
  }
  return res[nums.length - 1]
}