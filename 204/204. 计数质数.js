/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let res = 0
    const arr = new Array(n).fill(false)
    for (let i = 2; i * i < n; i++) {
        for (let j = i * i; j < n; j += i) {
            arr[j] = true
        }
    }
    for (let i = 2; i < n; i++) {
        if (!arr[i]) res++
    }
    return res
};