/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let a = nums.length
  let b = nums[0].length
  let res = []
  let aa = []
  nums.forEach(item => {
    item.forEach(v => {
      aa.push(v)
    })
  })
  if ((a * b) == (r * c)) {
    for (let i = 0; i < r; i++) {
      res.push(aa.splice(0, c))
    }
  } else {
    return nums
  }
  return res
}
