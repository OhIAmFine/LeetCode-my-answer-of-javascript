var maxProduct = function(nums) {
  let res = []
  let max = 1
  for(let i = 0; i < nums.length; i ++) {
    if(nums[i] * max <= nums[i]) {
      res.push(nums[i] * max)
      max = nums[i]
    }else {
      max = nums[i] * max
    }

  }
  return Math.max(...res)
};

console.log(maxProduct([2,3,-2,4]))