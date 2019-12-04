/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    const swapTree = (node) => {
        if (!node) return node
        const temp = node.left
        node.left = swapTree(node.right)
        node.right = swapTree(temp)
        return node
    }
    swapTree(root)
    return root
};