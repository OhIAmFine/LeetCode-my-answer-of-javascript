/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0
    const queen = [[beginWord, 1]]
    while (queen.length) {
        const [word, level] = queen.shift()
        if (word === endWord) return level
        for (let next of wordSet) {
            if (canConvert(word, next)) {
                queen.push([next, level + 1])
                wordSet.delete(next)
            }
        }
    }

    function canConvert(word, next) {
        if (word.length !== next.length) return false;
        let count = 0
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== next[i]) count++
            if (count > 1) return false
        }
        return count === 1
    }

    return 0
};