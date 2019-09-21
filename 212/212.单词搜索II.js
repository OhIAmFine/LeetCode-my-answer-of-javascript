/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const res = []
  var Trie = function () {
    this.node = {}
    this.endOfWord = '#'
    this.delete = '-'
  }
  Trie.prototype.insert = function (word) {
    let node = this.node
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) {
        node[word[i]] = {}
      }
      node = node[word[i]]
    }
    node[this.endOfWord] = this.endOfWord
  }
  Trie.prototype.search = function (word) {
    let node = this.node
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) return false
      node = node[word[i]]
    }
    return node[this.delete] ? false : !!node[this.endOfWord]
  }
  Trie.prototype.startsWith = function (prefix) {
    let node = this.node
    for (let i = 0; i < prefix.length; i++) {
      if (!node[prefix[i]]) return false
      node = node[prefix[i]]
    }
    return true
  }
  Trie.prototype.deleteWord = function (word) {
    let node = this.node
    for (let c of word) {
      if (node[c]) {
        node = node[c]
      }
    }
    node[this.delete] = this.delete
  }

  const DFS = (board, i, j, visited, str, tries) => {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return
    if (visited[i][j]) return

    str += board[i][j]
    if (!tries.startsWith(str)) return
    if (tries.search(str)) {
      res.push(str)
      tries.deleteWord(str)
    }

    visited[i][j] = true
    DFS(board, i - 1, j, visited, str, tries)
    DFS(board, i + 1, j, visited, str, tries)
    DFS(board, i, j - 1, visited, str, tries)
    DFS(board, i, j + 1, visited, str, tries)
    visited[i][j] = false

  }
  const findWords = (words) => {
    const tries = new Trie()
    const len1 = board.length
    const len2 = board[0].length
    const visited = new Array(len1)

    for (let i = 0; i < len1; i++) {
      for (let j = 0; j < len2; j++) {
        visited[i] = []
        visited[i][j] = false
      }
    }

    for (let i = 0; i < words.length; i++) {
      tries.insert(words[i])
    }

    for (let i = 0; i < len1; i++) {
      for (let j = 0; j < len2; j++) {
        let str = ''
        DFS(board, i, j, visited, str, tries)
      }
    }
    return res
  }
  findWords(words)
  return res
}

console.log(findWords([
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
], ['oath', 'pea', 'eat', 'rain']))