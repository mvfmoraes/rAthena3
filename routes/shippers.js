module.exports = app => {
    app.route('/Shippers')
        .get(app.services.shippers.ObterTodos);
    app.route('/Shippers/:				ShipperID')
        .get(app.services.shippers.ObterPorId);
}