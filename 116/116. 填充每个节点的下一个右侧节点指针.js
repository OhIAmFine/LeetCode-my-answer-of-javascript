/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root
    let prev = null
    const stack = [{flag: true, node: root}]
    while (stack.length) {
        const {flag, node} = stack.pop()
        node.next = flag ? null : prev
        prev = node
        if (node.left) stack.push({flag: false, node: node.left})
        if (node.right) stack.push({flag: flag ? true : false, node: node.right})
    }
    return root
};