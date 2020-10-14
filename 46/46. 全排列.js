/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    const store = {}
    dfs([])
    return res

    function dfs(path) {
        if (path.length === nums.length) {
            res.push([...path])
        }
        for (let i = 0; i < nums.length; i++) {
            if (store[nums[i]]) continue
            store[nums[i]] = true
            dfs([...path, nums[i]])
            store[nums[i]] = false
        }
    }

};