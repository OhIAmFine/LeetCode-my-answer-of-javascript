var minDistance = function (word1, word2) {
  let DP = new Array(word1.length)
  for (let i = 0; i <= word1.length; i++) {
    DP[i] = new Array()
    DP[i][0] = i
  }
  for (let j = 0; j <= word2.length; j++) {
    DP[0][j] = j
  }

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        DP[i + 1][j + 1] = DP[i][j]
      } else {
        DP[i + 1][j + 1] = Math.min(Math.min(DP[i][j + 1], DP[i + 1][j]), DP[i][j]) + 1
      }
    }
  }
  return DP[word1.length][word2.length]
}

console.log(minDistance('horse', 'ros'))