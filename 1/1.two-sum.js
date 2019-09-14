// 两数之和

var twoSum = function (nums, target) {
  const res = []
  let val = null
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i]
    const arr = nums.slice(i + 1)
    if (arr.includes(remain)) {
      res.push(i)
      val = remain
      continue
    }
    if (nums[i] === val) {
      res.push(i)
      break
    }
  }
  return res
}

console.log(twoSum([2, 7, 11, 15], 9))