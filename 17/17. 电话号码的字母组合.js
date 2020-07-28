/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    var phone = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    var output = []

    function backtrack(combination, next_digits) {
        if (next_digits.length === 0) {
            output.push(combination)
        } else {
            for (let letter of phone[next_digits[0]]) {
                backtrack(combination + letter, next_digits.substring(1))
            }
        }
    }

    if (digits) {
        backtrack('', digits)
    }
    return output
};
