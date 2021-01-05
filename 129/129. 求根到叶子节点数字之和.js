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
var sumNumbers = function (root) {
    return dfs(root, [])

    function dfs(node, path) {
        if (!node) return ""
        path.push(node.val)
        if (!node.left && !node.right) return path.reduce((sum, val) => sum + val, "")
        const left = dfs(node.left, [...path])
        const right = dfs(node.right, [...path])
        return Number(left) + Number(right)
    }
};