/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let res = ''
    let carry = 0
    let i = num1.length - 1
    let j = num2.length - 1
    while (i >= 0 || j >= 0) {
        let temp = Number(num1[i]) + Number(num2[j]) + carry
        if (i < 0) {
            temp = Number(num2[j]) + carry
            i = 0
        }
        if (j < 0) {
            temp = Number(num1[i]) + carry
            j = 0
        }
        carry = temp >= 10 ? 1 : 0
        res = temp % 10 + res
        console.log(i, j, num1[i], num2[j])
        i--
        j--
    }
    return carry > 0 ? `${carry}${res}` : `${res}`
};