/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    let n = envelopes.length;
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    let height = [];
    for (let i = 0; i < n; i++) height[i] = envelopes[i][1]
    return lengthOfLIS(height);
};

function lengthOfLIS(nums) {
    let dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] - nums[j] > 0) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
    return Math.max(...dp, 0)
}