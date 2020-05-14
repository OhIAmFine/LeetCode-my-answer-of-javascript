/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let x = m
    let y = n
    for (let i = 0; i < ops.length; i++) {
        x = Math.min(ops[i][0], x)
        y = Math.min(ops[i][1], y)
    }
    return x * y
};