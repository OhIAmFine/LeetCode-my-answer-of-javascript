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
var getKthFromEnd = function (head, k) {
  let count = 1
  let cur = head
  while (cur.next) {
    count++
    cur = cur.next
  }
  cur = head
  while (count !== k) {
    count--
    cur = cur.next
  }
  return cur
}