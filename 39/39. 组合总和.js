/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    if (!candidates.length) return []
    const res = []
    const path = []
    const len = candidates.length
    const arr = candidates.sort((a, b) => a - b)
    const dfs = (arr, begin, len, path, res, target) => {
        if (target == 0) {
            res.push([...path])
            return
        }
        for (let i = begin; i < len; i++) {
            const rest = target - arr[i]
            if (rest < 0) break
            path.push(arr[i])
            dfs(arr, i, len, path, res, rest)
            path.pop()
        }
    }
    dfs(arr, 0, len, path, res, target)
    return res
};