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
  const listNode = new ListNode(0)
  listNode.next = head
  let before = new ListNode(0)
  let after = new ListNode(0)
  let smallPoint = before
  let bigPoint = after
  let cur = listNode.next
  while (cur) {
    if (cur.val >= x) {
      bigPoint.next = cur
      bigPoint = bigPoint.next
    } else {
      smallPoint.next = cur
      smallPoint = smallPoint.next
    }
    cur = cur.next
  }
  bigPoint.next = null
  smallPoint.next = after.next
  return before.next
};
