/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romaStore = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let num = 0
    for (let i = 0; i < s.length; i++) {
        if (romaStore[s[i]] < romaStore[s[i + 1]]) {
            num += romaStore[s[i + 1]] - romaStore[s[i]]
            i++
        } else {
            num += romaStore[s[i]]
        }
    }
    return num
};
