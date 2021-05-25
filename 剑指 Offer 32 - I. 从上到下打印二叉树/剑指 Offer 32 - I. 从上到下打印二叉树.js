/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const stack = [root]
  let res = []
  while (stack.length) {
    const cur = stack.shift()
    res.push(cur.val)
    if (cur.left) stack.push(cur.left)
    if (cur.right) stack.push(cur.right)
  }
  return res
}