var getRow = function(rowIndex) {
  const res = []
  for(let i = 0; i < rowIndex; i ++) {
    res[i] = new Array(i + 1).fill(1)
    for(let j = 0; j < res[i].length; j ++) {
      if(j > 0 && j < res[i].length - 1) {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
  }
  console.log(res)
  return res[rowIndex - 1]
};