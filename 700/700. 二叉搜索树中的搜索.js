/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const dfs = (node) => {
    if (!node || node.val === val) return node
    const nodeVal = node.val
    if (val < nodeVal) return dfs(node.left)
    if (val > nodeVal) return dfs(node.right)
  }
  return dfs(root)
}