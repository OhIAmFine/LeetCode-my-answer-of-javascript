/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let smaller_prev = new ListNode(0)
    const bigger_prev = new ListNode(0)
    let smaller = smaller_prev
    let bigger = bigger_prev
    while (head) {
        if (head.val < x) {
            smaller.next = new ListNode(head.val)
            smaller = smaller.next
        } else {
            bigger.next = new ListNode(head.val)
            bigger = bigger.next
        }
        head = head.next
    }
    smaller.next = bigger_prev.next
    return smaller_prev.next
};