/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const store = []
    inorder(root)
    return store[k - 1]

    function inorder(node) {
        if (!node) return
        inorder(node.left)
        store.push(node.val)
        inorder(node.right)
    }
};