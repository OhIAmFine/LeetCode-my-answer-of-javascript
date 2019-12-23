/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    const strArr = str.split(' ')
    if (pattern.length !== strArr.length) return false

    const patternMap = new Map()
    const strArrMap = new Map()

    for (let i = 0; i < pattern.length; i++) {
        const getPatternMap = patternMap.get(pattern[i])
        const getStrArrMap = strArrMap.get(strArr[i])
        if (!getPatternMap) {
            patternMap.set(pattern[i], strArr[i])
        } else if (getPatternMap !== strArr[i]) {
            return false
        }

        if (!getStrArrMap) {
            strArrMap.set(strArr[i], pattern[i])
        } else if (getStrArrMap !== pattern[i]) {
            return false
        }
    }
    return true
};
