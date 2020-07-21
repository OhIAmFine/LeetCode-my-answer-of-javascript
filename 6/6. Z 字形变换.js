/**
 * @param {string} s
 * @param {number} numRowsr
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s
    const rows = new Array(Math.min(s.length, numRows))
    let curRow = 0
    let goingDown = false
    for (let i = 0; i < s.length; i++) {
        rows[curRow] = rows[curRow] ? rows[curRow] + s[i] : s[i]
        if (curRow == 0 || curRow === numRows - 1) goingDown = !goingDown
        curRow += goingDown ? 1 : -1
    }
    return rows.join("")
};