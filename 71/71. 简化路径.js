/**
 * @param {string} path
 * @return {string}
 */
class Stack {
    constructor() {
        this._data = []
    }

    push(e) {
        this._data.push(e)
    }

    pop() {
        return this._data.pop()
    }

    join(s) {
        return this._data.join(s)
    }
}

var simplifyPath = function (path) {
    const stack = new Stack()
    const pathArr = path.split('/')
    for (const s of pathArr) {
        if (s === '' || s === '.') {
            continue;
        } else if (s === '..') {
            stack.pop()
        } else {
            stack.push(s)
        }
    }
    return '/' + stack.join('/')
};
