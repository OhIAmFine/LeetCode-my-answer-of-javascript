var isPalindrome = function(s) {
  if(!s) return true
  let str = ''
  const reg = /[a-zA-Z0-9]/
  for(let i = 0; i < s.length; i ++) {
    if(reg.test(s[i])) {
      str += s[i]
    }
  }
  console.log(str.toLocaleLowerCase())
  const reveredStr = str.toLocaleLowerCase().split('').reverse().join('')
  return str.toLocaleLowerCase() === reveredStr
};

console.log(isPalindrome("OP"))