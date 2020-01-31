/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const res = new Array(n)
    for (let i = 0; i < n; i++) {
        const index = i + 1
        if (index % 3 === 0 && index % 5 === 0) {
            res[i] = 'FizzBuzz'
        } else if (index % 3 === 0) {
            res[i] = 'Fizz'
        } else if (index % 5 === 0) {
            res[i] = 'Buzz'
        } else {
            res[i] = `${i + 1}`
        }
    }
    return res
};