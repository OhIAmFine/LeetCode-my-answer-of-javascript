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
var detectCycle = function (head) {
    const hash = new Set()
    let cur = head
    while (cur) {
        if (hash.has(cur)) return cur
        else hash.add(cur)
        cur = cur.next
    }
    return null
};