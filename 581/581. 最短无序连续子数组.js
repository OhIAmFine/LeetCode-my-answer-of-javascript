/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    const stack = []
    let r = 0
    let l = nums.length
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            l = Math.min(l, stack.pop())
        }
        stack.push(i)
    }
    stack.length = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            r = Math.max(r, stack.pop())
        }
        stack.push(i)
    }
    return r - l > 0 ? r - l + 1 : 0
};