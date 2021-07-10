module.exports = app => {
    app.route('/Employees')
        .get(app.services.employees.ObterTodos);
    app.route('/Employees/:	emp_no')
        .get(app.services.employees.ObterPorId);
}