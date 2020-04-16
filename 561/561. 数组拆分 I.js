/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    const sorted = nums.sort((a, b) => a - b)
    let res = 0
    for (let i = 0; i < sorted.length; i = i + 2) {
        res += sorted[i]
    }
    return res
};