var minDepth = function (root) {
  if (!root) return 0
  if (!root.left) return 1 + minDepth(root.right)
  if (!root.right) return 1 + minDepth(root.left)
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  return 1 + Math.min(left, right)
}