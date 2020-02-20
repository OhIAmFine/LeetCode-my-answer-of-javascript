/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const res = []
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) res.push(i)
    }
    return res
};