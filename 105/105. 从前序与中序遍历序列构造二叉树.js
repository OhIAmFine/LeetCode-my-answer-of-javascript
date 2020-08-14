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
        if (pStart === pEnd) return null
        const index = store[preorder[pStart]]
        const root = new TreeNode(inorder[index])
        const leftNum = index - iStart
        root.left = buildTreeHelper(pStart + 1, pStart + leftNum + 1, iStart, iStart + index)
        root.right = buildTreeHelper(pStart + leftNum + 1, pEnd, index + 1, iEnd)
        return root
    }
    return buildTreeHelper(0, preorder.length, 0, inorder.length)
};