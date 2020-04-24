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
var findTilt = function (root) {
    if (!root) return 0;
    return Math.abs(dfs(root.left) - dfs(root.right)) + findTilt(root.left) + findTilt(root.right);

    function dfs(root) {
        if (!root) return 0;
        return root.val + dfs(root.left) + dfs(root.right);
    }
};