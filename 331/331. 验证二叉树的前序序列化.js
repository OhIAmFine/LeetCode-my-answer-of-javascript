/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    const len = preorder.length
    let slot = 1
    for (let i = 0; i < len; i++) {
        if (preorder.charAt(i) === ',') {
            slot -= 1
            if (slot < 0) return false
            if (preorder.charAt(i - 1) !== '#') slot += 2
        }

    }
    slot = preorder.charAt(len - 1) === "#" ? slot - 1 : slot + 1
    return slot === 0
};