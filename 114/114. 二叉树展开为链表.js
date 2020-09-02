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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    function helper(node) {
        if (!node) return null
        if (!node.left && !node.right) return node
        const left = helper(node.left)
        const right = helper(node.right)
        if (left) {
            node.right = left
            node.left = null
            let temp = node.right
            while (temp.right) {
                temp = temp.right
            }
            temp.right = right
        } else {
            node.right = right
            node.left = null
        }
        return node
    }

    helper(root)
};

var flatten = function (root) {
    let curr = root;
    while (curr !== null) {
        if (curr.left !== null) {
            const next = curr.left;
            let predecessor = next;
            while (predecessor.right !== null) {
                predecessor = predecessor.right;
            }
            predecessor.right = curr.right;
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right;
    }
};
