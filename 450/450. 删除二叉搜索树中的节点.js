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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null
    let val = root.val
    if (val > key) {
        root.left = deleteNode(root.left, key)
    } else if (val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.left && !root.right) {
            root = null
        } else if (root.right) {
            root.val = rightMin(root.right)
            console.log(root.val)
            root.right = deleteNode(root.right, root.val)
        } else {
            root.val = leftMax(root.left)
            root.left = deleteNode(root.left, root.val)
        }
    }
    return root

    function leftMax(node) {
        while (node.right) node = node.right
        return node.val
    }

    function rightMin(node) {
        while (node.left) node = node.left
        return node.val
    }
};