module.exports = app => {
    app.route('/Customers')
        .get(app.services.customers.ObterTodos);
    app.route('/Customers/:customer_id')
        .get(app.services.customers.ObterPorId);
}