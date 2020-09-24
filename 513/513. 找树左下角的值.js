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
var findBottomLeftValue = function (root) {
    let res = 0
    let maxDepth = -Infinity
    dfs(root, 0)
    return res

    function dfs(node, depth) {
        if (!node) return
        const val = node.val
        if (depth > maxDepth) {
            maxDepth = depth
            res = val
        }
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }
};

var findBottomLeftValue = function (root) {
    let queue = [root]
    let node
    while (queue.length) {
        node = queue.pop()
        console.log(node.val)
        if (node.right) queue.unshift(node.right)
        if (node.left) queue.unshift(node.left)
    }
    return node.val
};