var checkPossibility = function (nums) {
  let count = 0
  // 因为我们指针是指向1的所以先手动判断下nums[0],nums[1]
  if (nums[0] > nums[1]) {
    count++
    nums[0] = nums[1]
  }
  for (let i = 1; i < nums.length; i++) {
    // 破坏了非递减状态，进行最优化调整
    // 要么调大nums[i+1]这样有可能导致nums[i+1]>nums[i+2]
    // 要么调小nums[i]但这时候又有可能导致nums[i]<nums[i-1]
    // 所以根据nums[i-1]与nums[i+1]的大小进行调整,达到最优化的效果
    if (nums[i] > nums[i + 1]) {
      count++
      // 循环到nums[i]才出现问题说明 nums[i]肯定是大于他前面的数
      // 同时他又比他后一位大，所以此时nums[i]是最大的数，

      // 如果他左边的数比右边的数小,比如3,5,4
      // 那调小中间数既不影响左边又不对后面的数产生影响
      // 同时nums[i]越小越容易递增
      if (nums[i - 1] <= nums[i + 1]) {
        nums[i] = nums[i - 1]
      }
      // 那么如果左边的数比右边的数大此时就算我们调整中间数也不一定能够成功
      // 比如 10,11,3,所以我们调整右边数也就是nums[i]
      else {
        nums[i + 1] = nums[i]
      }
    }
  }
  // 所以最终的原则是能往小的调绝对不往大的调
  return count <= 1
}
