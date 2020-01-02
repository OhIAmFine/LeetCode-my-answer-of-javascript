/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const reg = /[aeiouAEIOU]/
    const arr = s.split("")
    const len = s.length
    let right = len - 1
    let left = 0
    while (left < right) {
        if (reg.test(arr[left])) {
            if (reg.test(arr[right])) {
                const temp = arr[left]
                arr[left] = arr[right]
                arr[right] = temp
                left++
            }
            right--
        } else {
            left++
        }
    }
    return arr.join("")
};