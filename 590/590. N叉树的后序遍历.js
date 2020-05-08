/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (!root) return []
    const res = []
    const stack = [root]
    while (stack.length) {
        const cu = stack.pop()
        if (cu.children) {
            for (let i = 0; i < cu.children.length; i++) {
                stack.push(cu.children[i])
            }
        }
        res.unshift(cu.val)
    }
    return res
};