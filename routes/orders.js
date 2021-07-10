module.exports = app => {
    app.route('/Orders')
        .get(app.services.orders.ObterTodos);
    app.route('/Orders/:			order_id')
        .get(app.services.orders.ObterPorId);
}