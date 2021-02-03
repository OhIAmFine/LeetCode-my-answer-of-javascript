/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    if (nums.length <= 0) return 0
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i]
        if (arr[value]) arr[value] += value
        else arr[value] = value
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] || 0
    }
    let a = 0, b = arr[0]
    for (let i = 1; i < arr.length; i++) {
        [a, b] = [b, Math.max(b, a + arr[i])]
    }
    return b
};