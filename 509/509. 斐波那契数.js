/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    const store = new Array(N).fill(0).map((val, idx) => idx)
    if (N <= 1) return N
    for (let i = 2; i <= N; i++) store[i] = store[i - 1] + store[i - 2]
    return store[N]
};