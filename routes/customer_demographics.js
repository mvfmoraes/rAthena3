module.exports = app => {
    app.route('/Customer_demographics')
        .get(app.services.customer_demographics.ObterTodos);
    app.route('/Customer_demographics/:CustomerTypeID')
        .get(app.services.customer_demographics.ObterPorId);
}