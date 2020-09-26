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
 * @return {number[]}
 */
var largestValues = function (root) {
  const res = []
  if (!root) return res
  const store = [root]
  let max = -Infinity
  while (store.length) {
    const size = store.length
    for (let i = 0; i < size; i++) {
      const temp = store.pop()
      if (temp.val > max) max = temp.val
      if (temp.left) store.unshift(temp.left)
      if (temp.right) store.unshift(temp.right)
    }
    res.push(max)
    max = -Infinity
  }
  return res
}