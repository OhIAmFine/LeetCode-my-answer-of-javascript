/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 1
    let max = 1
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === 1 && count) {
            count++
            max = count > max ? count : max
        } else if (nums[i] === 0) {
            count = 1
        }
    }
    return max - 1
};