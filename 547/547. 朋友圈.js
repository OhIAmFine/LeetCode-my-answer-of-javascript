var findCircleNum = function (M) {
  if (!M.length) return 0
  let count = 0
  const m = M.length
  const flag = new Array(m)

  const DFS = (M, flag, i) => {
    flag[i] = true
    for (let j = 0; j < m; j++) {
      if (!flag[j] && M[i][j] === 1) {
        DFS(M, flag, j)
      }
    }

  }

  for (let i = 0; i < m; i++) {
    if (!flag[i]) {
      DFS(M, flag, i)
      count++
    }
  }

  return count
}

console.log(findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]))