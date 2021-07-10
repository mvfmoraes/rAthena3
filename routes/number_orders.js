module.exports = app => {
    app.route('/Number_orders')
        .get(app.services.number_orders.ObterTodos);
    app.route('/Number_orders/:		number_order')
        .get(app.services.number_orders.ObterPorId);
}