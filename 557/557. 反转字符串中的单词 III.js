/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " " || i === s.length - 1) {
            end = i === s.length - 1 ? i + 1 : i
            const str = s.slice(start, end).split("").reverse().join("")
            s = s.slice(0, start).concat(str, s.slice(end, s.length))
            start = i + 1
        }
    }
    return s
};