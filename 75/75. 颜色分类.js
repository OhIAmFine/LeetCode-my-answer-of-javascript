/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums, p0 = -1, p2 = nums.length) {
    for (var i = -1; i < p2; i++) {
        while (nums[i] == 2 && i < --p2) [nums[i], nums[p2]] = [nums[p2], nums[i]]
        nums[i] == 0 && i > ++p0 && ([nums[i], nums[p0]] = [nums[p0], nums[i]])
    }
};
