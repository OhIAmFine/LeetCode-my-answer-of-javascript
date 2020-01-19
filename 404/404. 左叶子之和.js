/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let sum = 0
    if (!root) return 0
    const dfs = (node) => {
        if (!node.right && !node.left) return node.val
        if (node.left) sum = dfs(node.left) + sum
        if (node.right) dfs(node.right)
        return 0
    }
    dfs(root)
    return sum
};