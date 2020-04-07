/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    if (k < 0) {
        return 0;
    }
    let pos = new Map();
    let len = nums.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (pos.has(nums[i])) {
            pos.set(nums[i], pos.get(nums[i]) + 1);
        } else {
            pos.set(nums[i], 1)
        }
    }

    for (let i = 0; i < len; i++) {
        if (pos.has(nums[i]) && pos.get(nums[i]) > 0) {
            if ((k > 0 && pos.has(nums[i] + k)) || (k === 0 && pos.get(nums[i]) > 1))
                count++;
            pos.set(nums[i], -1);
        }
    }
    return count;
};