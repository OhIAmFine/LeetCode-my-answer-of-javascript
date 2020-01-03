/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const store1 = {}
    const store2 = []
    for (let i = 0; i < nums1.length; i++) {
        if (store1[nums1[i]]) {
            store1[nums1[i]]++
        } else {
            store1[nums1[i]] = 1
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (store1[nums2[i]] > 0) {
            store1[nums2[i]]--
            store2.push(nums2[i])
        }
    }
    return store2
};