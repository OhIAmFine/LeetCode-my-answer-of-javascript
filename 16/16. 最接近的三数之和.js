/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(res - target) > Math.abs(sum - target)) {
                res = sum;
            } else if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else if (sum === target) {
                return res;
            }
        }
    }
    return res;
};
