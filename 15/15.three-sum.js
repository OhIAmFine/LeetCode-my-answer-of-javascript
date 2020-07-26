/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue
    const rest = 0 - sorted[i]
    let left = i + 1
    let right = sorted.length - 1
    while (left < right) {
      const temp = sorted[left] + sorted[right]
      if (temp > rest) right--
      if (temp < rest) left++
      if (temp === rest) {
        res.push([sorted[i], sorted[left], sorted[right]])
        while (left < right && sorted[left] === sorted[left + 1]) left++
        while (left < right && sorted[right] === sorted[right - 1]) right--
        left++
        right--
      }
    }
  }
  return res
}