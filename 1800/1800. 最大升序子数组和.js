/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    if (!nums.length) return 0
    let store = [nums[0]]
    let res = 0
    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length) {
            const total = store.reduce((sum, val) => sum + val, 0)
            res = Math.max(total, res)
            break
        }
        const cur = nums[i]
        if (cur <= nums[i - 1]) {
            const total = store.reduce((sum, val) => sum + val, 0)
            res = Math.max(total, res)
            store = [cur]
        } else store.push(cur)
    }

    return res
};