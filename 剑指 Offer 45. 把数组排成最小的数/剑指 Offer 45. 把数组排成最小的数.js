/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  if (nums.length < 2) return nums.join('')
  return quickSort(nums, 0, nums.length - 1).join('')
}

function quickSort (nums, start, end) {
  const index = partition(nums, start, end)
  if (start < index - 1) quickSort(nums, start, index - 1)
  if (index < end) quickSort(nums, index, end)
  return nums
}

function partition (nums, l, r) {
  const p = nums[l + r >> 1]
  while (l <= r) {
    while ('' + nums[l] + p < '' + p + nums[l]) l++
    while ('' + nums[r] + p > '' + p + nums[r]) r--
    if (l <= r) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
      r--
    }
  }
  return l
}
