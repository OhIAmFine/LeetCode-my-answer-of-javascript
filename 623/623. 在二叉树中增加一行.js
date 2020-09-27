/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
  if (d === 1) {
    const node = new TreeNode(v)
    node.left = root
    return node
  }
  insert(v, root, 1, d)
  return root

  function insert (val, node, curDepth, depth) {
    if (!node) return
    if (curDepth === depth - 1) {
      let tree = node.left
      node.left = new TreeNode(val)
      node.left.left = tree
      tree = node.right
      node.right = new TreeNode(val)
      node.right.right = tree
    } else {
      insert(val, node.left, curDepth + 1, depth)
      insert(val, node.right, curDepth + 1, depth)
    }
  }
}