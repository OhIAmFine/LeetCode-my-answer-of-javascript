/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let successor = null

function reserveN(head, n) {
    if (n === 1) {
        successor = head.next
        return head
    }
    const last = reserveN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last
}

var reverseBetween = function (head, m, n) {
    if (m === 1) return reserveN(head, n)
    head.next = reverseBetween(head.next, m - 1, n - 1)
    return head

};