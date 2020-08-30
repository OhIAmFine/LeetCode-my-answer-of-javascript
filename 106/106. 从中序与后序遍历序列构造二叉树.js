/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length) return null
  let n = postorder.length
  let tmp = postorder[n - 1], mid = inorder.indexOf(tmp)
  let root = new TreeNode(tmp)
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
  root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, n - 1))
  return root
}
