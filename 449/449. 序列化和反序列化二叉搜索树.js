/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return "X,"
    const left = serialize(root.left)
    const right = serialize(root.right)
    return root.val + ',' + left + right
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = data.split(",")
    return dfs(arr)

    function dfs(arr) {
        const temp = arr.shift()
        if (temp === 'X') {
            return null
        }
        const node = new TreeNode(temp)
        node.left = dfs(arr)
        node.right = dfs(arr)
        return node
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */