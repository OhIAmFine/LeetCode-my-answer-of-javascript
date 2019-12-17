/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return []
    let paths = []
    const dfs = (node, path, paths) => {
        if (!node.right && !node.left) {
            path += node.val
            paths.push(path)
            return
        }
        path += node.val + "->"
        if (node.left) dfs(node.left, path, paths)
        if (node.right) dfs(node.right, path, paths)
    }
    dfs(root, "", paths)
    return paths
};