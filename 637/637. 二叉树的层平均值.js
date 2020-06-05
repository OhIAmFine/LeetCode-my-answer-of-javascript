/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const res = []
    const count = []
    const sum = []
    const dfs = (node, height, sum, count) => {
        if (!node) return
        if (height <= count.length - 1) {
            sum[height] += node.val
            count[height] += 1
        } else {
            sum[height] = node.val
            count[height] = 1
        }
        dfs(node.left, height + 1, sum, count)
        dfs(node.right, height + 1, sum, count)
    }
    dfs(root, 0, sum, count)
    for (let i = 0; i < sum.length; i++) {
        res[i] = sum[i] / count[i]
    }
    return res
};