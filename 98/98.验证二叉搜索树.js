// 中序遍历

var isValidBST = function (root) {
  const stack = []
  let inorder = -Infinity
  while (stack.length || root != null) {
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.val <= inorder) return false
    inorder = root.val
    root = root.right
  }
  return true
}