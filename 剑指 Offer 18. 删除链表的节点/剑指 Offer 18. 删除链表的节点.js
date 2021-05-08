/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead
  while (cur.next) {
    if (cur.next.val === val) cur.next = cur.next.next
    else cur = cur.next
  }
  return dummyHead.next
}