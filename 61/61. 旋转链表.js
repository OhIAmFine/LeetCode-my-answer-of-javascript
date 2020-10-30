/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head
    let len = 1
    let oldTail = head
    while (oldTail.next) {
        len++
        oldTail = oldTail.next
    }
    oldTail.next = head

    let pos = len - (k % len) - 1
    let newTail = head
    for (let i = 0; i < pos; i++)newTail = newTail.next
    let newHead = newTail.next
    newTail.next = null
    return newHead
};