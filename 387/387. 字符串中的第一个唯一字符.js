/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let store = []
    let baseCharCode = 'a'.charCodeAt()
    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt() - baseCharCode
        store[index] = store[index] ? store[index] + 1 : 1
    }
    for (let i = 0; i < s.length; i++) {
        const index = s[i].charCodeAt() - baseCharCode
        if (store[index] === 1) return i
    }
    return -1
};