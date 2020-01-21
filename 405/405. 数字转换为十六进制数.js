/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (!num) return '0'
    let res = ''
    const position = '0123456789abcdef'
    while (num != 0 && res.length < 8) {
        res = position[num & 15] + res;
        num >>= 4;
    }
    return res
};