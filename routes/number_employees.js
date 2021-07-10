module.exports = app => {
    app.route('/Number_employees')
        .get(app.services.number_employees.ObterTodos);
    app.route('/Number_employees/:		number_customer_id')
        .get(app.services.number_employees.ObterPorId);
}