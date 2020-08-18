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
var recoverTree = function (root) {
    const nums = []
    inorder(root)
    const {x, y} = getWrongVal(nums)
    recover(root, 2, x, y)

    function inorder(node) {
        if (!node) return
        inorder(node.left)
        nums.push(node.val)
        inorder(node.right)
    }

    function getWrongVal(nums) {
        let x = -1, y = -1
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                y = nums[i + 1]
                if (x === -1) {
                    x = nums[i]
                } else {
                    break
                }
            }
        }
        return {x, y}
    }

    function recover(node, count, x, y) {
        if (!node) return
        if (node.val === x || node.val === y) {
            node.val = node.val !== x ? x : y
            if (--count === 0) return
        }
        recover(node.left, count, x, y)
        recover(node.right, count, x, y)
    }
}