/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
  if (!root) return root
  const val = root.val
  if (val > R) {
    delete root.right
    return trimBST(root.left, L, R)
  }
  if (val < L) {
    delete root.left
    return trimBST(root.right, L, R)
  }
  root.right = trimBST(root.right, L, R)
  root.left = trimBST(root.left, L, R)
  return root
}