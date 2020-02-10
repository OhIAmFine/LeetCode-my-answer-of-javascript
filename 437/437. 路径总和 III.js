/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
    const dfs = (node, arr, pointer) => {
        if (!node) return 0
        let tempVal = node.val
        let num = tempVal === sum ? 1 : 0
        for (let i = pointer - 1; i >= 0; i--) {
            tempVal += arr[i]
            if (tempVal === sum) {
                num++
            }
        }
        arr[pointer] = node.val
        const left = dfs(node.left, arr, pointer + 1)
        const right = dfs(node.right, arr, pointer + 1)
        return num + left + right
    }
    return dfs(root, new Array(1000), 0)
};