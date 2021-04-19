/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0, r = nums.length - 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] < nums[r]) {
      r = mid
    } else if (nums[mid] > nums[r]) {
      l = mid + 1
    } else if (nums[mid] === nums[r]) {
      r = r - 1
    }
  }
  return nums[l]
}