/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minium = 0
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.unshift(x)
  this.getMin()
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.shift()
  this.getMin()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = Infinity
  for(let i = 0; i < this.stack.length; i ++) {
    if(this.stack[i] < min) {
      min = this.stack[i]
    }
  }
  this.minium = min
  return this.minium
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */