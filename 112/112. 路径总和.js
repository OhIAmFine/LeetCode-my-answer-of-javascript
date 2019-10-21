var hasPathSum = function (root, sum) {
  if (!root) return 0
  const res = []
  const calPath = (node, sum) => {
    if (!node.left && !node.right) return res.push(sum + node.val)
    if (node.left) calPath(node.left, sum + node.val)
    if (node.right) calPath(node.right, sum + node.val)
  }
  calPath(root, 0)
  return res.includes(sum)
}