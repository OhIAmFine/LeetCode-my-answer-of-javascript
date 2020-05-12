/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const hashMap = {}
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            hashMap[nums[i]] = hashMap[nums[i]] + 1
        } else {
            hashMap[nums[i]] = 1
        }
        if (hashMap[nums[i] + 1]) {
            res = Math.max(res, hashMap[nums[i]] + hashMap[nums[i] + 1])
        }
        if (hashMap[nums[i] - 1]) {
            res = Math.max(res, hashMap[nums[i]] + hashMap[nums[i] - 1])
        }
    }
    return res
};