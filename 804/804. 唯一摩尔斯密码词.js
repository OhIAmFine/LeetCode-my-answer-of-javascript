/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const table = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    const store = new Set()
    for(let i = 0; i < words.length; i ++) {
        const chars = words[i]
        let moerStr = chars.split("").reduce((sum, char) => sum + table[char.charCodeAt() - 97], "")
        store.add(moerStr)
    }
    return store.size
};