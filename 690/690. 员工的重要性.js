/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    const store = {}
    employees.forEach((employee) => {
        store[employee.id] = employee
    })
    const dfs = id => {
        const employee = store[id]
        let ans = employee.importance
        employee.subordinates.forEach((id) => ans += dfs(id))
        return ans
    }
    return dfs(id)
};