/**
 * @param {number} n
 * @return {number[]}
 */
function getTickets(n, arr) {
    let res = 0;
    let count = n / 2;
    const store = [];
    const canSqrt = (number) => {
        return String(Math.sqrt(number)).indexOf(".") === -1;
    };
    const closeToWhichNumber = (number) => {
        const val = Math.sqrt(number);
        const intVal = Math.floor(val);
        if (val - intVal > 0.5) return (intVal + 1) * (intVal + 1);
        return intVal * intVal;
    };
    for (let i = 0; i < n; i++) {
        if (!canSqrt(arr[i])) {
            store.push(arr[i]);
        }else {
            count--;
        }
    }
        store[i] = Math.abs(closeToWhichNumber(store[i]) - store[i]);
    }
    store.sort((a, b) => a - b);
    for (let i = 0; i < store.length; i++) {
        res += store[i];
        count--;
        if (count === 0) return res;
    }
}

class Solution {
    public int getTickets(int k, int [] arr) {
        int res = 0
        int count = n /2
        int []
}
}