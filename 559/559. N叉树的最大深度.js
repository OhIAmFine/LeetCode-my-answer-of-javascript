/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    else if (!root.children.length) return 1
    else {
        const height = []
        for (let item of root.children) {
            height.push(maxDepth(item))
        }
        return Math.max(...height) + 1
    }
};