/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const store = {}
    for (let i = 0; i < s.length; i++) {
        if (!store[s[i]]) {
            store[s[i]] = 1
        } else {
            store[s[i]]++
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (store.hasOwnProperty(t[i]) && store[t[i]] > 0) {
            store[t[i]]--
        } else {
            return t[i]
        }
    }
};