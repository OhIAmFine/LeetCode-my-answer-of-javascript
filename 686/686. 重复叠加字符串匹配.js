/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    if (!A) return -1
    let cout = 1
    let str = A
    while (true) {
        if (str.includes(B)) return cout
        if (str.length > A.length * 2 + B.length) return -1
        cout++
        str += A
    }
};