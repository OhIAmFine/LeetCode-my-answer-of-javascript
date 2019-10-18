var isBalanced = function (root) {
  if (!root) return true
  const getDepth = (node) => {
    if (!node) return 0
    return 1 + Math.max(getDepth(node.left), getDepth(node.right))
  }
  const leftDepth = getDepth(root.left)
  const rightDepth = getDepth(root.right)
  return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}