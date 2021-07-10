module.exports = app => {
    app.route('/Order_details')
        .get(app.services.order_details.ObterTodos);
    app.route('/Order_details/:			OrderID')
        .get(app.services.order_details.ObterPorId);
}