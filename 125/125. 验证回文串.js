var isPalindrome = function (s) {
  // if(!s) return true
  // let str = ''
  // const reg = /[a-zA-Z0-9]/
  // for(let i = 0; i < s.length; i ++) {
  //   if(reg.test(s[i])) {
  //     str += s[i]
  //   }
  // }
  // console.log(str.toLocaleLowerCase())
  // const reveredStr = str.toLocaleLowerCase().split('').reverse().join('')
  // return str.toLocaleLowerCase() === reveredStr
  // const a = [1,2,3,4,5]
  // const b = []
  // try{
  //   a.forEach((val,idx) => {
  //     if(val === 3) throw new Error('aaa')
  //     b.push(val)
  //   })
  // }catch (e) {
  //
  // }
  // console.log(b)
  class Quene {
    constructor (size) {
      this.max = size || 10
      this.quene = []
      this.promiseQuene = []
    }

    sort () {
      this.quene.sort((a, b) => a.level - b.level)
    }

    add ({ level, func }) {
      this.quene.push({ level, func })
      this.sort()
    }

    async run () {
      let results = []
      for (let i = 0; i < this.max; i++) {
        const { func } = this.quene[i]
        this.promiseQuene.push(func )
        results = await Promise.all(this.promiseQuene)
        this.promiseQuene = []
        return results
      }
    }
  }
}

console.log(isPalindrome('OP'))