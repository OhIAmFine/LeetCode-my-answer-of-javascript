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
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode(0)
  let l = head
  let p1 = l1, p2 = l2
  while (p1 || p2) {
    if (!p1) {
      l.next = p2
      break
    } else if (!p2) {
      l.next = p1
      break
    } else if (p1.val >= p2.val) {
      l.next = new ListNode(p2.val)
      p2 = p2.next
    } else {
      l.next = new ListNode(p1.val)
      p1 = p1.next
    }
    l = l.next
  }
  return head.next
}