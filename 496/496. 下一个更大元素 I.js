/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const s = [];
    const hash = [];
    const result = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (s.length && s[s.length - 1] <= nums2[i]) {
            const x = s.pop();
            hash[x] = s.length ? s[s.length - 1] : -1;
        }
        s.push(nums2[i]);
    }
    while (s.length) {
        const x = s.pop();
        hash[x] = s.length ? s[s.length - 1] : -1;
    }
    for (let i = 0; i < nums1.length; i++) {
        result.push(hash[nums1[i]]);
    }
    return result;
};
