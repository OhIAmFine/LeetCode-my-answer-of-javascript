var isSameTree = function (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
}