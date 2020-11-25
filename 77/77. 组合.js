/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const res = []

  const helper = (start, path) => {
    if (path.length == k) {
      res.push(path.slice())
      return
    }
    for (let i = start; i <= n; i++) {
      path.push(i)
      helper(i + 1, path)
      path.pop()
    }
  }

  helper(1, [])
  return res
}

