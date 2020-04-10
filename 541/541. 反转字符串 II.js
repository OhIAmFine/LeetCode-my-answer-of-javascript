/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    let len = s.length
    if (len <= 1) return s
    let arr = s.split('')
    for (let i = 0; i < len; i += 2 * k) {
        let start = i, end = Math.min(i + k - 1, len - 1)
        while (start < end) {
            [arr[start++], arr[end--]] = [arr[end], arr[start]]
        }
    }
    return arr.join('')
}
