/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const dummyHead = new ListNode(0)
    let curr = dummyHead
    let carry = 0
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const sum = val1 + val2 + carry
        carry = sum > 9 ? 1 : 0
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carry) curr.next = new ListNode(1)
    return dummyHead.next
};