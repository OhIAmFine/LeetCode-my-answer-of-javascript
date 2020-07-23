/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0, i = 0, j = height.length - 1, cur = 0
  while (i < j) {
    let h = height[i] < height[j] ? height[i] : height[j]
    cur = h * (j - i)
    res = cur > res ? cur : res
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return res
}
