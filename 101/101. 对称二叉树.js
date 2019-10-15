var isSymmetric = function (root) {
  const isMirror = (node1, node2) => {
    if (node1 == null && node2 == null) return true
    if (node1 == null || node2 == null) return false
    return (node1.val == node2.val)
      && isMirror(node1.right, node2.left)
      && isMirror(node1.left, node2.right)
  }
  return isMirror(root, root)
}