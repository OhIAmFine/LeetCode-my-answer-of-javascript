/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const store1 = new Set(nums1)
    const store2 = new Set()
    for (let i = 0; i < nums2.length; i++) {
        if (store1.has(nums2[i])) store2.add(nums2[i])
    }
    return [...store2]
};