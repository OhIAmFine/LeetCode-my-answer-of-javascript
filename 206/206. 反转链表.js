/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null
    let cur = head
    while (cur) {
        const nextNode = cur.next
        cur.next = prev
        prev = cur
        cur = nextNode
    }
    return prev
};