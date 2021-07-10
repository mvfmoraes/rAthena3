module.exports = app => {
    app.route('/Orderdetails')
        .get(app.services.orderdetails.ObterTodos);
    app.route('/Orderdetails/:			orderNumber')
        .get(app.services.orderdetails.ObterPorId);
}