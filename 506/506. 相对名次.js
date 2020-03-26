/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    let res = [];
    let medal = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    nums.map((value, index) => [value, index]).sort((pre, cur) => cur[0] - pre[0]).forEach((value, index) => {
        res[value[1]] = index < 3 ? medal[index] : String(index + 1)
    });
    return res;
};
