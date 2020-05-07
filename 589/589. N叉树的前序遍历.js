/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    const res = []
    const preorder = (node) => {
        if (!node) return
        res.push(node.val)
        node.children.forEach(node => preorder(node))
    }
    preorder(root)
    return res
};