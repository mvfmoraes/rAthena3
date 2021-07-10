module.exports = app => {
    app.route('/Payment')
        .get(app.services.payment.ObterTodos);
    app.route('/Payment/:			payment_id')
        .get(app.services.payment.ObterPorId);
}