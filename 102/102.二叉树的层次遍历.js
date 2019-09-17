// BFS 广度优先

var levelOrder = function (root) {
  if (!root) return []
  const queue = []
  const res = []
  queue.push(root)
  res.push([root.val])
  while (queue.length) {
    const len = queue.length
    const temp = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
        temp.push(node.left.val)
      }
      if (node.right) {
        queue.push(node.right)
        temp.push(node.right.val)
      }
    }
    if (temp.length) res.push(temp)
  }
  return res
}