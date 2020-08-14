//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const store = {}
    for (let i = 0; i < inorder.length; i++) {
        store[inorder[i]] = i
    }
    const buildTreeHelper = (pStart, pEnd, iStart, iEnd) => {
        if (pStart > pEnd) return null
        const rootVal = preorder[pStart]
        let root = new TreeNode(rootVal)
        let index = store[rootVal]
        const leftNum = index - iStart
        root.left = buildTreeHelper(pStart + 1, pStart + leftNum, iStart, index - 1)
        root.right = buildTreeHelper(pStart + leftNum + 1, pEnd, index + 1, iEnd)
        return root
    }
    return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1)
};