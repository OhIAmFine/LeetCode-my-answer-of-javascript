/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let arr = s.replace(/10/g, '1 0').replace(/01/g, '0 1').split(/\s/)
    console.log(arr)
    let n = 0
    for (i = 0; i < arr.length - 1; i++) {
        n += Math.min(arr[i].length, arr[i + 1].length)
    }
    return n
};
