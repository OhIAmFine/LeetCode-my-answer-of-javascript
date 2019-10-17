var levelOrderBottom = function (root) {
  if (!root) return []
  const result = []
  const levelOrder = (root) => {
    const q = [root]
    while (q.length) {
      const len = q.length
      const level = []
      for (let i = 0; i < len; i++) {
        const node = q.shift()
        level.push(node.val)
        if (node.left) q.push(node.left)
        if (node.right) q.push(node.right)
      }
      result.push(level)
    }
  }
  levelOrder(root)
  return result.reverse()
}