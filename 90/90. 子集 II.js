/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort()
    const res = []
    const store = new Set()
    const dfs = (index, path) => {
        const str = path.join("")
        if (!store.has(str)) {
            res.push([...path])
            store.add(str)
        } else return
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1, path)
            path.pop()
        }
    }
    dfs(0, [])
    return res
};