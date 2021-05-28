/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  /*
      BFS 构造队列 + 判断当前层奇偶调换顺序
  */
  if (!root) return []

  const queue = [[root, 0]], res = []

  while (queue.length) {
    const [node, lev] = queue.shift()

    // 初始化当前层
    if (!res[lev]) res[lev] = []

    // 奇数层 逆序 1 3 5 偶数层 正序 0 2 4
    lev & 1 ? res[lev].unshift(node.val) : res[lev].push(node.val)

    node.left && queue.push([node.left, lev + 1])
    node.right && queue.push([node.right, lev + 1])
  }

  return res
};
