/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    const res = []
    // 将字符去掉 “-” 并且反转字符串
    const str = S.toUpperCase().split('-').join("").split("").reverse().join("")
    let index = 0
    for (let i = 0, len = str.length; i < len; i++) {
        // 如果字符串剩余的小于等于 K ，则前面加入到结果数组中
        if (len - index <= K) {
            // 将字符串反转并加入到结果数组
            const temp = str.slice(i).split("").reverse().join("")
            res.unshift(temp)
            break
        }
        // 如果累计字符满足 K 个，则加入到结果数组中
        if ((i + 1) % K === 0) {
            const temp = str.slice(i + 1 - K, i + 1).split("").reverse().join("")
            res.unshift(temp)
            index = i
        }
    }
    return res.join('-')
};