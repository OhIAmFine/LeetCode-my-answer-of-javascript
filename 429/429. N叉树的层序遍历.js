/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const res = []
    const store = [root]
    while (store.length) {
        let level = []
        const size = store.length
        for (let i = 0; i < size; i++) {
            const node = store.shift()
            level.push(node.val)
            store.push(...node.children)
        }
        res.push(level)
    }
    return res
};