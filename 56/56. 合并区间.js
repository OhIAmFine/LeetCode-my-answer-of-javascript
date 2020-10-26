/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const res = []
    const sorted = intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < sorted.length; i++) {
        const left = sorted[i][0], right = sorted[i][1]
        if (!res.length || res[res.length - 1][1] < left) res.push([left, right])
        else res[res.length - 1][1] = Math.max(res[res.length - 1][1], right)
    }
    return res
};