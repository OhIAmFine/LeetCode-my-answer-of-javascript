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

var sortedArrayToBST = function (nums) {
  const convertToBST = (l, r) => {
    if (l > r) return null
    const mid =l + parseInt((r - l) / 2)
    const minNode = new TreeNode(nums[mid])
    minNode.left = convertToBST(l, mid - 1)
    minNode.right = convertToBST(mid + 1, r)
    return minNode
  }
  return nums.length ? convertToBST(0, nums.length - 1) : null
}