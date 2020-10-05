/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
  const m = dep(root)
  const res = Array.from(new Array(m), () => new Array(Math.pow(2, m) - 1).fill(''))
  print(root, 0, (Math.pow(2, m) - 1) / 2 | 0, (Math.pow(2, m) - 1) / 4 | 0)
  return res

  function dep (root) {
    if (root == null) return 0
    const left = dep(root.left)
    const right = dep(root.right)
    return Math.max(left, right) + 1
  }

  function print (root, depth, center, width) {
    if (!root) return
    res[depth][center] = root.val + ''
    print(root.left, depth + 1, center - width - 1, width / 2 | 0)
    print(root.right, depth + 1, center + width + 1, width / 2 | 0)
  }
}

