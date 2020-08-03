/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let len = nums.length
  if (len <= 1) return

  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let j = len - 1; j > i; j--) {
        if (nums[i] < nums[j]) {
          swap(i, j, nums)
          break
        }
      }
      let x = i + 1, y = len - 1
      while (x < y) swap(x++, y--, nums)
      break
    }
    if (i === 0) {
      let x = i, y = len - 1
      while (x < y) swap(x++, y--, nums)
    }
  }
}

function swap (i, j, nums) {
  let t = nums[i]
  nums[i] = nums[j]
  nums[j] = t
}