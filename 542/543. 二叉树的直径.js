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
var diameterOfBinaryTree = function (root) {
    let res = 0
    const dfs = (node) => {
        if (!node) return 0
        const left = dfs(node.left)
        const right = dfs(node.right)
        res = Math.max(right + left, res)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return res
};