/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  // 初始化二维数组用来保存访问过的路径
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
  // 设置 上下左右 四个方向
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  // 初始化值为 0
  let res = 0
  dfs(0, 0)
  return res

  function dfs (i, j) {
    // 超出边界 直接返回
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return
    // 计算 i, j 之和是否小于 k
    const val = [...(i).toString().split(''), ...(j).toString().split('')].reduce((sum, val) => sum + +val, 0)
    if (val > k) return
    // 把走过的路径设为 true
    visited[i][j] = true
    res++
    // 遍历四个方向，进行 DFS
    for (let [dx, dy] of directions) {
      const newI = i + dx, newJ = j + dy
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n) {
        if (!visited[newI][newJ]) dfs(newI, newJ)
      }
    }
  }
}