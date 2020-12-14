/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    const res = [0]
    let head = 1
    for (let i = 0; i < n; i++) {
        for (let j = res.length - 1; j >= 0; j--) {
            res.push(head + res[j])
        }
        head <<= 1
    }
    return res
};