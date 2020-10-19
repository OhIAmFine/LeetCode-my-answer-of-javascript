/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const store = {}
  const covertToNumber = (char) => char.codePointAt() - 97
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const tempArr = []
    for (let j = 0; j < str.length; j++) {
      tempArr.push(covertToNumber(str.charAt(j)))
    }
    const sortedStr = tempArr.sort().join()
    if (store[sortedStr]) {
      store[sortedStr].push(str)
    } else {
      store[sortedStr] = [str]
    }
  }
  return Object.values(store)
}