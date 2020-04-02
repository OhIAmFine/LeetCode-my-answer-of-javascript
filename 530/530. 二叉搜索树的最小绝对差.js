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
var getMinimumDifference = function (root) {
    const store = []
    let res = Infinity
    const dfs = (node) => {
        if (!node) return
        dfs(node.left)
        store.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    for (let i = 1; i < store.length; i++) {
        const gap = store[i] - store[i - 1]
        if (gap < res) {
            res = gap
        }
    }
    return res
};