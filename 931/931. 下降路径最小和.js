/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    if (!matrix.length) return 0
    const m = matrix.length
    const n = m
    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(m).fill(0)
    }
    for (let i = 0; i < m; i++) {
        dp[0][i] = matrix[0][i]
    }
    for (let i = 0; i < m; i++) {
        dp[i][0] = matrix[i][0]
    }
    for (let i = 0; i < m; i++) {
        dp[i][m - 1] = matrix[i][m - 1]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                dp[i][j] = Math.min(dp[i - 1][j + 1], dp[i - 1][j]) + matrix[i][j]
            } else if (j === n - 1) {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + matrix[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) + matrix[i][j]
            }
        }
    }
    return Math.min(...dp[m - 1])
}