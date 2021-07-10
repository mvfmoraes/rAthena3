module.exports = app => {
    app.route('/Products')
        .get(app.services.products.ObterTodos);
    app.route('/Products/:				product_id')
        .get(app.services.products.ObterPorId);
}