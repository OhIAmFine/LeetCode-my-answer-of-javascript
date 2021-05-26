/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length) {
    const temp = []
    const size = stack.length
    for (let i = 0; i < size; i++) {
      const node = stack.shift()
      temp.push(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
    res.push(temp)
  }
  return res
}