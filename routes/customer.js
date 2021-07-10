module.exports = app => {
    app.route('/Customer')
        .get(app.services.customer.ObterTodos);
    app.route('/Customer/:customer_id')
        .get(app.services.customer.ObterPorId);
}