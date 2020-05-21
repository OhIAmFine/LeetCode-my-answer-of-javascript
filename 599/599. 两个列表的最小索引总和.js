/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let res = []
    let indexSum
    let hash = new Map()
    for (let i = 0; i < list1.length; i++) {
        hash.set(list1[i], i)
    }
    for (let i = 0; i < list2.length; i++) {
        if (hash.has(list2[i])) {
            if (typeof indexSum === 'undefined') {
                indexSum = hash.get(list2[i]) + i
                res = [list2[i]]
            } else {
                if (indexSum > hash.get(list2[i]) + i) {
                    indexSum = hash.get(list2[i]) + i
                    res = [list2[i]]
                } else if (indexSum == hash.get(list2[i]) + i) {
                    res.push(list2[i])
                }
            }

        }
    }
    return res
};
