/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    if (!candidates.length) return []
    const res = []
    const path = []
    const len = candidates.length
    const arr = candidates.sort((a, b) => a - b)
    dfs(0, target)
    return res

    function dfs(begin, target) {
        if (target === 0) {
            res.push([...path])
        }
        for (let i = begin; i < len; i++) {
            if (i > begin && arr[i] === arr[i - 1]) continue
            const rest = target - arr[i]
            if (rest < 0) break
            path.push(arr[i])
            dfs(i + 1, rest)
            path.pop()
        }
    }
};