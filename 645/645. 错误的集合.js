/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    var arr = new Array(nums.length).fill(0);
    let res1 = 0, res2 = 0;
    for (let i  of nums) {
        arr[i - 1]++;
        if (arr[i - 1] == 2) res1 = i;
    }
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == 0) {
            return [res1, i + 1];
        }
    }
    return [];
};
