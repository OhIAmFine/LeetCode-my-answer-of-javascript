/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0)
    dummy.next = head
    let count = 1
    let first = dummy
    let second = dummy
    while(first) {
        first = first.next
        if(count > n + 1) {
            second = second.next
        }
        count ++
    }
    second.next = second.next.next
    return dummy.next
};