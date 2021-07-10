module.exports = app => {
    app.route('/Salaries')
        .get(app.services.salaries.ObterTodos);
    app.route('/Salaries/:				emp_no')
        .get(app.services.salaries.ObterPorId);
}