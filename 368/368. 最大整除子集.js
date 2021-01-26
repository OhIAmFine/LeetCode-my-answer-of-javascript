/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    let len = nums.length
    if (len <= 1) return nums

    nums = nums.sort((a, b) => a - b)
    let maxIndex = 0
    let dp = []
    dp[0] = [nums[0]]
    let optionLen, lastItem
    for (let i = 1; i < len; i++) {
        optionLen = dp.length
        for (let j = optionLen - 1; j >= 0; j--) {
            lastItem = dp[j][dp[j].length - 1]
            if (nums[i] % lastItem === 0) {
                if (dp[j].length + 1 >= dp[maxIndex].length) {
                    dp.push([...dp[j], nums[i]])
                    maxIndex = dp.length - 1
                }
            }
        }
        if (optionLen === dp.length) dp.push([nums[i]])
    }
    return dp[maxIndex]
};
