module.exports = app => {
    app.route('/Number_customers')
        .get(app.services.number_customers.ObterTodos);
    app.route('/Number_customers/:		number_customer_id')
        .get(app.services.number_customers.ObterPorId);
}