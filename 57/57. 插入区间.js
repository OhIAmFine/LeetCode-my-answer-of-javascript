/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const res = []
    const temp = intervals.concat([newInterval])
    const arr = temp.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < arr.length; i++) {
        const left = arr[i][0], right = arr[i][1], len = res.length;
        if (!len || res[len - 1][1] < left) res.push([left, right])
        else res[len - 1][1] = Math.max(res[len - 1][1], right)
    }
    return res
};