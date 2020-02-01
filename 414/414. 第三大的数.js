/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let one = nums[0]
    let two = -Infinity
    let three = -Infinity
    for (let i = 0; i < nums.length; i++) {
        let index = nums[i]
        if (index > one) {
            three = two
            two = one
            one = index
        } else if (index > two && index != one) {
            three = two
            two = index
        } else if (index > three && index != two && index != one) {
            three = index
        }
    }
    return nums.length >= 3 && three != -Infinity ? three : one
};