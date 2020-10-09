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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let res = BigInt(0)
  let left = BigInt(0)
  let depth = 0
  const queue = [{ node: root, depth: 0, pos: BigInt(0) }]
  while (queue.length) {
    const cur = queue.shift()
    if (cur.node != null) {
      queue.push({ node: cur.node.left, depth: cur.depth + 1, pos: BigInt(cur.pos * BigInt(2)) })
      queue.push({ node: cur.node.right, depth: cur.depth + 1, pos: BigInt(cur.pos * BigInt(2) + BigInt(1)) })
      if (cur.depth != depth) {
        depth = cur.depth
        left = cur.pos
      }
      if (cur.pos - left + BigInt(1) > res) {
        res = cur.pos - left + BigInt(1)
      }
    }
  }
  return res
};