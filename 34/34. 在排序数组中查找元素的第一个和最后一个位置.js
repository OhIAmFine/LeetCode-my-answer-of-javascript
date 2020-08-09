/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1, mid
  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] === target) break
    if (nums[mid] > target) right = mid - 1
    else left = mid + 1
  }
  if (left > right) return [-1, -1]
  let i = mid, j = mid
  while (nums[i] === nums[i - 1]) i--
  while (nums[j] === nums[j + 1]) j++
  return [i, j]
}
