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

var findFrequentTreeSum = function (root) {
    let map = {}, ans = [];

    function calcuSum(node) {
        if (!node) return 0;
        let left = calcuSum(node.left);
        let right = calcuSum(node.right);
        let sum = node.val + left + right;
        node.val = sum;
        if (map[sum] === undefined) {
            map[sum] = 1;
        } else {
            map[sum]++;
        }
        return node.val;
    }

    calcuSum(root);

    let maxCount = 0;
    for (let key in map) {
        let count = map[key];
        if (count === maxCount) {
            ans.push(Number(key));
        }
        if (count > maxCount) {
            maxCount = count;
            ans = [Number(key)];
        }
    }

    return ans;
};