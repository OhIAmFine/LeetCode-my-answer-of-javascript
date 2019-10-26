// 采用双指针

var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null
  let pA = headA
  let pB = headB
  while(pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
};