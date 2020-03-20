/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let ans = [], maxCount = 0, count = 0, last = null;
    search(root);

    function search(node) {
        if (node === null) {
            return;
        }
        search(node.left);
        if (last === node.val) {
            count++;
        } else {
            count = 1;
        }
        if (maxCount === count) {
            ans.push(node.val);
        } else if (maxCount < count) {
            ans = [node.val];
            maxCount = count;
        }
        last = node.val;
        search(node.right);
    }

    return ans;
};
