/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let R = M.length, C = M[0].length
  // 创建长度为R的二维数组
  let res = Array.from({ length: R }, () => ([]))
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      let count = 0
      res[r][c] = 0
      // 遍历当前地元素周边3x3矩阵
      for (let nr = r - 1; nr <= r + 1; nr++) {
        for (let nc = c - 1; nc <= c + 1; nc++) {
          if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
            res[r][c] += M[nr][nc]
            count++
          }
        }
      }
      res[r][c] = Math.floor(res[r][c] / count)
    }
  }
  return res
}
