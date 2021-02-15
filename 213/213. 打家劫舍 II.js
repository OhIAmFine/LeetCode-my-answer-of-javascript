/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 * dp[i] 表示考虑抢劫 nums[0...i] 所能获得的最大收益
 * Math.max(dp[i - 1], dp[i - 2] + nums[i])
 * 考虑成 2 个 198 题的单排列：
 * 在不偷窃第一个房子的情况下 和 在不偷窃最后一个房子的情况下 两者的最大值
 */
var rob = function (nums) {
    // 根据传入数组获取：考虑抢劫 dp[0...nums.length-1] 所能获得的最大收益
    const getDpValue = function (nums) {
        let n = nums.length
        if (n === 0) { // 如果是空数组直接返回0
            return 0
        }
        let dp = new Array(n).fill(-1)
        dp[0] = nums[0] // 初始化 dp[0]
        dp[1] = Math.max(nums[0], nums[1])
        // 通过规模较小的问题推导出规模较大的问题
        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
        return dp[n - 1]
    }
    if (nums.length === 1) {
        return nums[0]
    } else if (nums.length === 2) {
        return Math.max(...nums)
    }
    // 第一个排列，不偷窃第一个房子下求最大值
    let array = JSON.parse(JSON.stringify(nums)) // 拷贝一份数组
    array.shift() // 剔除第一个房子
    let typeOneValue = getDpValue(array)

    // 第二个排列，不偷窃最后一个房子下求最大值
    nums.pop() // 剔除最后一个房子
    let typeTwoValue = getDpValue(nums)
    return Math.max(typeOneValue, typeTwoValue)
};
