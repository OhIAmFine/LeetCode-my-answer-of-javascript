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
const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER
  const dfs = (root) => {
    if (root == null) return 0
    const left = Math.max(0, dfs(root.left))
    const right = Math.max(0, dfs(root.right))
    maxSum = Math.max(maxSum, left + root.val + right)
    return root.val + Math.max(left, right)
  }
  dfs(root)
  return maxSum
}
