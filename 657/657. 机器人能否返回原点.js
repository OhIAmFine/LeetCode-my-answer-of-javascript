/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    return moves.split('L').length === moves.split('R').length && moves.split('U').length === moves.split('D').length
};