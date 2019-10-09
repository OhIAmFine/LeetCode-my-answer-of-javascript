var numIslands = function (grid) {
  if (!grid.length) return 0
  let count = 0
  const m = grid.length
  const n = grid[0].length

  const DFS = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == '0') return
    grid[i][j] = '0'
    DFS(grid, i + 1, j)
    DFS(grid, i, j + 1)
    DFS(grid, i - 1, j)
    DFS(grid, i, j - 1)

  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        DFS(grid, i, j)
        count++
      }
    }
  }
  return count
}

console.log(numIslands([['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]))