/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const slidingWindow = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (slidingWindow.has(nums[i])) return true
        slidingWindow.add(nums[i])
        if (slidingWindow.size > k) slidingWindow.delete(nums[i - k])
    }
    return false
};