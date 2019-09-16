// 采用递归的方式

var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  return !left ? right : (!right ? left : root)
}