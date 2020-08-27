/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) return []
    let isLeftFirst = true
    const res = []
    const stack = []
    let temp = []

    stack.push(root)
    stack.push(null)
    while (stack.length > 0) {
        const cur = stack.shift()
        if (cur) {
            if (isLeftFirst) {
                temp.push(cur.val)
            } else {
                temp.unshift(cur.val)
            }
            if (cur.left) stack.push(cur.left)
            if (cur.right) stack.push(cur.right)
        } else {
            res.push(temp)
            temp = []
            if (stack.length) {
                stack.push(null)
                isLeftFirst = !isLeftFirst
            }
        }
    }

    return res
};