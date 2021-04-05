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
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head
    const eNode = new ListNode(null)
    eNode.next = head

    let repeat = false
    let prev = eNode
    let cur = eNode.next
    while (cur.next) {
        if (cur.val !== cur.next.val) {
            if (repeat) {
                prev.next = cur.next
                repeat = false
            } else {
                prev = cur
            }
        } else {
            repeat = true
        }
        cur = cur.next
    }
    if (repeat) {
        prev.next = cur.next
    }
    return eNode.next
};