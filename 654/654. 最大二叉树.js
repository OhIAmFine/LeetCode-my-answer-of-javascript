/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    function buildRoot(nums) {
        if (!nums.length) return null
        let max = -Infinity
        let index = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i]
                index = i
            }
        }
        const node = new TreeNode(max)
        node.left = buildRoot(nums.slice(0, index))
        node.right = buildRoot(nums.slice(index + 1, nums.length))
        return node
    }

    return buildRoot(nums)
};