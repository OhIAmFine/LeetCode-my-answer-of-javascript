/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
    function subConstruct(grid, i, j, length) {
        if (length === 1) return new Node(grid[i][j] === 1 ? true : false, true)
        let mark = true
        let num = grid[i][j]
        for (let a = i; a < i + length; a++) {
            for (let b = j; b < j + length; b++) {
                if (num !== grid[a][b]) {
                    mark = false
                    break;
                }
            }
        }
        if (mark) return new Node(grid[i][j] === 1 ? true : false, true)
        let now = new Node(true, false)
        now.topLeft = subConstruct(grid, i, j, length >> 1)
        now.topRight = subConstruct(grid, i, j + (length >> 1), length >> 1)
        now.bottomLeft = subConstruct(grid, i + (length >> 1), j, length >> 1)
        now.bottomRight = subConstruct(grid, i + (length >> 1), j + (length >> 1), length >> 1)
        return now
    }

    return subConstruct(grid, 0, 0, grid.length)
};