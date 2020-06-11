/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const store = new Set()
    const dfs = (node, a) => {
        if (!node) return
        const val = node.val
        const temp = k - val
        if (store.has(temp)) return true
        if (!store.has(val)) store.add(val)
        const left = dfs(node.left)
        const right = dfs(node.right)
        return left || right ? true : false
    }
    return dfs(root)
};