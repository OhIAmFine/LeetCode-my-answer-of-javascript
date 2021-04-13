/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const len1 = s1.length, len2 = s2.length, len3 = s3.length
  if (len1 + len2 !== len3) return false
  if (!len1) return s2 === s3
  if (!len2) return s1 === s3
  const dp = (new Array((len1 + 1)).fill(0).map(() => (new Array((len2 + 1)))))
  dp[0][0] = true
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i > 0) dp[i][j] = !!dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1])
      if (j > 0) dp[i][j] = !!dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
    }
  }
  return dp[len1][len2]
}