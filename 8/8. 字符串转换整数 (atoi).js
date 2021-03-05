/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    class Automaton {
        constructor() {
            this.state = 'start';
            this.sign = 1;
            this.answer = 0;
            this.map = new Map([
                ['start', ['start', 'signed', 'in_number', 'end']],
                ['signed', ['end', 'end', 'in_number', 'end']],
                ['in_number', ['end', 'end', 'in_number', 'end']],
                ['end', ['end', 'end', 'end', 'end']]
            ])
        }

        getIndex(char) {
            if (char === ' ') {
                return 0;g
            } else if (char === '-' || char === '+') {
                return 1;
            } else if (typeof Number(char) === 'number' && !isNaN(char)) {
                return 2;
            } else {
                return 3;
            }
        }

        get(char) {
            this.state = this.map.get(this.state)[this.getIndex(char)];
            if (this.state === 'in_number') {
                this.answer = this.answer * 10 + (char - 0);
                this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, -Math.pow(-2, 31));
            } else if (this.state === 'signed') {
                this.sign = char === '+' ? 1 : -1;
            }
        }
    }

    let automaton = new Automaton();

    for (let char of str) {
        automaton.get(char);
    }

    return automaton.sign * automaton.answer;
};