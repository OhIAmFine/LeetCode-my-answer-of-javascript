/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let start = 1
    const res = []
    const total = n ** 2
    for (let i = 0; i < n; i++) res[i] = new Array(n)
    let left = 0, right = n - 1, top = 0, bottom = n - 1
    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) res[top][i] = start++
        for (let i = top; i < bottom; i++) res[i][right] = start++
        for (let i = right; i > left; i--) res[bottom][i] = start++
        for (let i = bottom; i > top; i--) res[i][left] = start++
        left++
        right--
        bottom--
        top++
    }
    if (top === bottom) for (let i = left; i <= right; i++) res[top][i] = start++
    else for (let i = top; i <= bottom; i++) res[i][left] = start++
    return res
};