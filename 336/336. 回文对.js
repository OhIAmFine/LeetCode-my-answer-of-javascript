/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
    const isPalindrome = str => {
        let l = 0, r = str.length - 1
        while (l < r) {
            if (str.charAt(l++) !== str.charAt(r--)) return false
        }
        return true
    }
    const res = []
    const reverseds = new Map()
    for (let i = 0; i < words.length; i++) {
        const reversed = words[i].split("").reverse().join("")
        reverseds.set(reversed, i)
    }
    for (let i = 0; i < words.length; i++) {
        const cur = words[i]
        if (isPalindrome(cur) && reverseds.has("") && cur !== "") {
            res.push([reverseds.get(""), i])
        }
        for (let j = 0; j < cur.length; j++) {
            const l = cur.substring(0, j)
            const r = cur.substring(j)
            if (isPalindrome(l) && reverseds.has(r) && reverseds.get(r) !== i) {
                res.push([reverseds.get(r), i])
            }
            if (isPalindrome(r) && reverseds.has(l) && reverseds.get(l) !== i) {
                res.push([i, reverseds.get(l)])
            }
        }
    }
    return res
};