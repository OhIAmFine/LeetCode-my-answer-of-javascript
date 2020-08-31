/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (!root) return []
  let res = []
  dfs(root, [], 0)
  return res

  function dfs (node, stack, curSum) {
    if (curSum + node.val === sum && !node.left && !node.right) {
      res.push([...stack, node.val])
    }
    if (node.left) dfs(node.left, [...stack, node.val], curSum + node.val)
    if (node.right) dfs(node.right, [...stack, node.val], curSum + node.val)
  }
}