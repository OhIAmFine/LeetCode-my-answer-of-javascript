/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  if (!root) return []
  const res = []
  dfs(root, [])
  return res

  function dfs (node, path) {
    path = [...path, node.val]
    if (!node.left && !node.right) {
      const sum = path.reduce((total, val) => total + val, 0)
      if (sum === target) res.push(path)
      return
    }
    if (node.left) dfs(node.left, [...path])
    if (node.right) dfs(node.right, [...path])
  }
}