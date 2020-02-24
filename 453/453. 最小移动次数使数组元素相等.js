/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const minums = nums.sort((a, b) => a - b).shift()
    let moves = 0
    for (let i = 0; i < nums.length; i++) {
        moves += Math.abs(nums[i] - minums)
    }
    return moves
};