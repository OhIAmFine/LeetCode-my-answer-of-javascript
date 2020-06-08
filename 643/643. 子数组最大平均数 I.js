/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}r
 */
var findMaxAverage = function (nums, k) {
    const judgeAverage = (nums) => {
        return nums.reduce((sum, value) => sum + value, 0) / nums.length
    }
    let res = judgeAverage(nums.slice(0, k))
    if (nums.length <= k) return res
    for (let i = 1; i < nums.length; i++) {
        const end = i + k
        if (end <= nums.length) {
            const temp = judgeAverage(nums.slice(i, end))
            res = Math.max(res, temp)
        }
    }
    return res
};