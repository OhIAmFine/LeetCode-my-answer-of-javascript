/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = (obstacleGrid) => {
    const row = obstacleGrid.length
    const column = obstacleGrid[0].length
    const dp = new Array(row).fill(0).map(() => new Array(column).fill(0))
    if (obstacleGrid[0][0] === 0) dp[0][0] = 1
    else return 0
    for (let i = 1; i < column; i++) {
        if (obstacleGrid[0][i] != 1) dp[0][i] = dp[0][i - 1]
    }
    for (let i = 1; i < row; i++) {
        if (obstacleGrid[i][0] != 1) dp[i][0] = dp[i - 1][0]
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (obstacleGrid[i][j] !== 1) dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[row - 1][column - 1]
};
