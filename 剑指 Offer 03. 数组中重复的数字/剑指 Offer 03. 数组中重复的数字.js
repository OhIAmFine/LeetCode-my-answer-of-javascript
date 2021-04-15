/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const store = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i])) return nums[i]
    else store.add(nums[i])
  }
}