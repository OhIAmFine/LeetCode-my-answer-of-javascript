/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    var result = [];
    for (var i = Math.sqrt(area) | 0; i > 0; i--) {
        var j = area / i;
        if (j === (j | 0) && j >= i) {
            result = [j, i];
            break;
        }
    }
    return result;
};

