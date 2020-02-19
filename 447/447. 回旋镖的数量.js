/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    // avoid losing the precision
    const getDistancePow = (x, y) => {
        return Math.pow((y[0] - x[0]), 2) + Math.pow((y[1] - x[1]), 2)
    }

    let result = 0

    for (let p = 0; p < points.length; p++) {
        const tmpMap = new Map()
        for (let n = 0; n < points.length; n++) {
            if (p === n) continue
            const distancePow = getDistancePow(points[p], points[n])
            const hasDistancePow = tmpMap.has(`${distancePow}`)
            if (hasDistancePow) {
                tmpMap.set(`${distancePow}`, tmpMap.get(`${distancePow}`) + 1)
            } else {
                tmpMap.set(`${distancePow}`, 1)
            }
        }
        tmpMap.forEach((value, key) => {
            if (value > 1) {
                const sum = value * (value - 1)
                result += sum
            }
        })
    }

    return result
}
