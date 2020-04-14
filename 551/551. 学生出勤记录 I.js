/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    return !(/A[B-Z]*A|LLL/.test(s))
};