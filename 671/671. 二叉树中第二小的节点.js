/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  if (!root || !root.left || !root.right) return -1
  let l = root.left.val,
    r = root.right.val
  if (root.val === root.left.val) l = findSecondMinimumValue(root.left)
  if (root.val === root.right.val) r = findSecondMinimumValue(root.right)
  if (l === -1) return r
  if (r === -1) return l
  return Math.min(l, r)
}