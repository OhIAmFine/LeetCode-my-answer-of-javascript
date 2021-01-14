function decode(arr, first) {
    const res = [first]
    for (let i = 1; i <= arr.length; i++) {
        res[i] = arr[i - 1] ^ res[i - 1]
    }
    return res
}