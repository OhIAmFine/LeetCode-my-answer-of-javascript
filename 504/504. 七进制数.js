/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num == 0) return '0';
    let str = '';
    let radix = 7;
    let isPositiveNum = true;
    if (num < 0) {
        num = -num;
        isPositiveNum = false;
    }
    while (num > 0) {
        str = num % radix + str;
        num = parseInt(num / 7);
    }
    return isPositiveNum ? str : '-' + str;
};
