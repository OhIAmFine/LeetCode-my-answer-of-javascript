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
let last = null, nextStart = null;
const handle = (p) => {
    if (last !== null) last.next = p
    if (nextStart === null) nextStart = p
    last = p;
}
var connect = function (root) {
    if (root === null) return null
    let start = root;
    while (start) {
        last = null;
        nextStart = null;
        for (let p = start; p !== null; p = p.next) {
            if (p.left !== null) handle(p.left)
            if (p.right !== null) handle(p.right)
        }
        start = nextStart;
    }
    return root;
};