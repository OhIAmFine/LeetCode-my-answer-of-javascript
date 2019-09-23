// 动态规划

var minimumTotal = function (triangle) {
  const min = triangle[triangle.length - 1]
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      min[j] = triangle[i][j] + Math.min(min[j], min[j + 1])
    }
  }
  return min[0]
}