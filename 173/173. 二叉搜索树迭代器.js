/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
let stack = [];
let res = 0;
var BSTIterator = function (root) {
    while (root) {
        stack.push(root);
        root = root.left;
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function (p) {
    p = stack.pop();
    res = p.val;
    p = p.right;
    while (p) {
        stack.push(p);
        p = p.left;
    }
    return res;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return stack.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
