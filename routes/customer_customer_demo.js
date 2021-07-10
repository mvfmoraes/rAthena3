module.exports = app => {
    app.route('/Customer_customer_demo')
        .get(app.services.customer_customer_demo.ObterTodos);
    app.route('/Customer_customer_demo/:	CustomerID')
        .get(app.services.customer_customer_demo.ObterPorId);
}