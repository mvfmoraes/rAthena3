module.exports = app => {
    app.route('/Suppliers')
        .get(app.services.suppliers.ObterTodos);
    app.route('/Suppliers/:				SupplierID')
        .get(app.services.suppliers.ObterPorId);
}