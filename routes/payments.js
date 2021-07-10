module.exports = app => {
    app.route('/Payments')
        .get(app.services.payments.ObterTodos);
    app.route('/Payments/:			customerNumber')
        .get(app.services.payments.ObterPorId);
}