/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (!s) return true
    let index = 0
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[index]) {
            if (index === s.length - 1) {
                return true;
            }
            index++;
        }
    }
    return false;
};
