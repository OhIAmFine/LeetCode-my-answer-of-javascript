/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return []
    const res = []
    let left = 2
    let right = nums.length - 1
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length; j++) {
            if (j != i + 1 && nums[j] === nums[j - 1]) continue
            left = j + 1
            right = nums.length - 1
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum < target) left++
                if (sum > target) right--
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) left++
                    while (left < right && nums[right] === nums[right - 1]) right--
                    left++
                    right--
                }
            }
        }
    }
    return res
};