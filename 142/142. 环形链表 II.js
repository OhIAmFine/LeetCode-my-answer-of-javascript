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

var detectCycle = function (head) {
    if (!head) return null
    let fast = head, slow = head
    while (fast) {
        slow = slow.next
        if (fast.next) fast = fast.next.next
        else return null
        if (fast === slow) {
            let temp = head
            while (temp !== slow) {
                temp = temp.next
                slow = slow.next
            }
            return temp
        }
    }
    return null
}