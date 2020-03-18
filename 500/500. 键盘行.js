/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    const row3 = ["z", "x", "c", "v", "b", "n", "m"]
    const res = []
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const headChar = word[0].toLowerCase()
        const matchRow = row1.includes(headChar) ? row1 : row2.includes(headChar) ? row2 : row3
        const isMatchAll = word.split("").every((val) => matchRow.includes(val.toLowerCase()))
        if (isMatchAll) res.push(word)
    }
    return res
};