/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  if (!numbers.length) return []
  let res = []
  let num = Infinity
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === num) {
      res.push(i + 1)
      return res
    }
    const desed = target - numbers[i]
    if (numbers.includes(desed, i + 1)) {
      res.push(i + 1)
      num = desed
    }
  }
  return []
}