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
var preorderTraversal = function (root) {
    if (!root) return []
    const res = []
    const stack = [root]
    while (stack.length) {
        const cur = stack.pop()
        res.push(cur.val)
        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return res
};

var preorderTraversal = function (root) {
    const res = []

    function dfs(node) {
        if (!node) return null
        const val = node.val
        res.push(val)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return res
};

var preorderTraversal = function (root) {
    if (!root) return []
    const res = []
    const stack = []
    let pointer = root
    while (pointer || stack.length) {
        while (pointer) {
            res.push(pointer.val)
            stack.push(pointer)
            pointer = pointer.left
        }
        pointer = stack.pop()
        pointer = pointer.right
    }
    return res
};