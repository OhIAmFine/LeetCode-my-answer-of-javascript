/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1
        nums[index] = Math.abs(nums[index]) * -1
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1)
        }
    }
    return res
};