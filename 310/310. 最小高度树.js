/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    let adjacent = [];
    let indegrees = [];
    for (let i = 0; i < n; i++) {
        adjacent.push([]);
        indegrees.push(0);
    }

    edges.forEach(edge => {
        adjacent[edge[0]].push(edge[1]);
        adjacent[edge[1]].push(edge[0]);
        indegrees[edge[0]]++;
        indegrees[edge[1]]++;
    });

    let collection = [];
    indegrees.forEach((index, item) => {
        if (index === 1) {
            collection.push(item);
        }
    });

    while (collection.length) {
        let temp = [];
        collection.forEach(vertex => {
            adjacent[vertex].forEach(lineTo => {
                if (--indegrees[lineTo] === 1) {
                    temp.push(lineTo);
                }
            });
        });

        if (!temp.length) {
            return collection;
        }

        collection = temp;
    }
    return [0];
}