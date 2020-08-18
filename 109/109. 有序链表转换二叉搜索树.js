/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let globalHead = head
    const len = getLen(head)
    return buildTree(0, len - 1)

    function getLen(node) {
        let len = 0
        while (node) {
            node = node.next
            len++
        }
        return len
    }

    function buildTree(left, right) {
        if (left > right) return null
        const root = new TreeNode()
        const mid = (left + right + 1) >> 1
        root.left = buildTree(left, mid - 1)
        root.val = globalHead.val
        globalHead = globalHead.next
        root.right = buildTree(mid + 1, right)
        return root
    }
};