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
var countNodes = function (root) {
    let res = 0
    dfs(root)
    return res

    function dfs(node) {
        if (!node) return
        res++
        dfs(node.left)
        dfs(node.right)
    }
};


var countNodes = function (root) {
    if (!root) return 0

    const leftDeep = deep(root.left)
    const rightDeep = deep(root.right)

    if (leftDeep === rightDeep) {
        return (1 << leftDeep) + countNodes(root.right)
    } else {
        return (1 << rightDeep) + countNodes(root.left)
    }

    function deep(node) {
        if (!node) return 0
        return deep(node.left) + 1
    }
};



