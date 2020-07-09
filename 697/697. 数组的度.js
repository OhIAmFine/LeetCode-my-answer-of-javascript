/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // 先找到出现最多次数的元素次数
  let map = new Map(), size = 1, distance = nums.length

  for (let n of nums) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
    size = Math.max(size, map.get(n))
  }

  let h = new Map()

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]

    h.set(cur, h.has(cur) ? h.get(cur) + 1 : 1)
    if (h.get(cur) == size) {
      let start = nums.indexOf(cur)
      distance = Math.min(distance, i - start + 1)
    }
  }
  return distance
}

