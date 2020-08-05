/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        const mid = (l + r) >> 1
        if (target === nums[mid]) return mid
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target & nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
};