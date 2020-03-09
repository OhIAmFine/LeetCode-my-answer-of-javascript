/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let temp = 1
    let res = 0
    while (num) {
        if ((num & 1) === 0) {
            res = res | temp
        }
        console.log(res, num, temp)
        temp <<= 1
        num >>= 1
    }
    return res
};