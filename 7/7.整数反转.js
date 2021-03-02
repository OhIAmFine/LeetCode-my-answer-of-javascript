var reverse = function (x) {
    let index = -1
    if (x > x * -1) index = 1
    const reversedX = Math.abs(x).toString().split('').reverse().join('') * index
    if (reversedX < Math.pow(-2, 31) || reversedX > Math.pow(2, 31)) return 0
    return reversedX
};