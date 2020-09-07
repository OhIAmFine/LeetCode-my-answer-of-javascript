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
var rightSideView = function (root) {
    const res = []
    if (!root) return res
    dfs(root, 0)
    return res

    function dfs(node, depth) {
        if (!node) return
        const val = node.val
        if (depth === res.length) res.push(val)
        dfs(node.right, depth + 1)
        dfs(node.left, depth + 1)
    }
};

var rightSideView = function (root) {
    const res = []
    const store = {}
    if (!root) return res
    dfs(root, 1)
    for (let idx in store) {
        res.push(store[idx][0])
    }
    return res

    function dfs(node, depth) {
        if (!node) return
        const val = node.val
        dfs(node.right, depth + 1)
        dfs(node.left, depth + 1)
        if (!store[depth]) {
            store[depth] = [val]
        } else {
            store[depth].push(val)
        }
    }
};