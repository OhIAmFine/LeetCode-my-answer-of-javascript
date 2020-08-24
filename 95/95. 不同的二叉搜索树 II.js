/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n == 0) return []
    return helpers(1, n)

    function helpers(start, end) {
        const allTrees = []
        if (start > end) {
            return [null]
        }
        for (let i = start; i <= end; i++) {
            const leftTrees = helpers(start, i - 1)
            const rightTrees = helpers(i + 1, end)
            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    const cur = new TreeNode(i)
                    cur.left = leftTree
                    cur.right = rightTree
                    allTrees.push(cur)
                }
            }
        }
        return allTrees
    }
};