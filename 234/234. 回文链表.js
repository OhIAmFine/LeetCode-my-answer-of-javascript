/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) return true
    let slow = head
    let fast = head.next
    let pre = null
    let prepre = null
    while (fast && fast.next) {
        pre = slow
        slow = slow.next
        fast = fast.next.next
        pre.next = prepre
        prepre = pre
    }
    let p2 = slow.next
    slow.next = pre
    let p1 = !fast ? slow.next : slow
    while (p1) {
        if (p1.val !== p2.val) return false
        p1 = p1.next
        p2 = p2.next
    }
    return true
};