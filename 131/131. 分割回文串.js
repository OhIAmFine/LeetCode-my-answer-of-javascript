/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s, dp = Array.from(s, _ => Array(s.length).fill(false)), res = []) {
  for (var i = s.length; i--;)
    for (var j = i; j < s.length; j++)
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
  var dfs = (r, start) => {
    start === s.length && res.push(r)
    for (var j = start; j < s.length; j++)
      dp[start][j] && dfs(r.concat([s.substring(start, j + 1)]), j + 1)
  }
  return dfs([], 0), res
}
