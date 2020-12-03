/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    while(l <= r) {
        const mid = (l + r) >> 1
        if(nums[mid] === target) return true
        if(nums[l] < nums[mid]) {
            if(nums[mid] > target && nums[l] <= target) {
                r = mid - 1
            }else {
                l = mid + 1
            }
        }else if(nums[mid] === nums[l]){
            l ++
        }else {
            if(nums[mid] < target && nums[r] >= target) {
                l = mid + 1
            }else {
                r = mid - 1
            }
        }
    }
    return false
};