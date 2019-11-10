var reverseBits = function (n) {
  let a = n.toString(2)
  return parseInt(reverse(completion(a)), 2)
}

function completion (n) {
  return (Array(32).join(0) + n).slice(-32)
}

function reverse (n) {
  return n.split('').reverse().join('')
}