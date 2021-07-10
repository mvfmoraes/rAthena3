module.exports = app => {
    app.route('/That_employees')
        .get(app.services.that_employees.ObterTodos);
    app.route('/That_employees/:				that_employee_id')
        .get(app.services.that_employees.ObterPorId);
}