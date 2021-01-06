/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const res = [];
    let i = 0,
        j = 0;
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] !== undefined && nums2[j] != undefined) {
            if (nums1[i] < nums2[j]) {
                res.push(nums1[i]);
                i++;
            } else {
                res.push(nums2[j]);
                j++;
            }
        } else if (nums1[i] !== undefined) {
            res.push(nums1[i]);
            i++;
        } else {
            res.push(nums2[j]);
            j++;
        }
    }
    const len = res.length;
    if (len % 2 === 1) {
        return res[(len - 1) / 2];
    } else {
        return (res[len / 2 - 1] + res[len / 2]) / 2;
    }
};
// @lc code=end
