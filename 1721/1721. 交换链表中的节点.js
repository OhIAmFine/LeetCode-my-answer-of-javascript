/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let h = head;
    let first = head;
    let last = head;
    let count = 1;
    while (h !== null) {
        if (count < k) first = first.next
        if (count > k) last = last.next
        count++;
        h = h.next;
    }
    count = first.val;
    first.val = last.val;
    last.val = count;
    return head;
};