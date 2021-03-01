/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = []
  const len = s.length
  const isTrue = (str) => str.split("").reverse().join("") === str
  function dfs(start, str, path) {
    if (start === len) return res.push(path)
    for (let i = start; i < len; i++) {
      const string = s.slice(start, i + 1)
      if (string && isTrue(string)) dfs(i + 1, string, [...path, string])
    }
  }
  dfs(0, "", [])
  return res
};

