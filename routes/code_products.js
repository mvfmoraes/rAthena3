module.exports = app => {
    app.route('/Code_products')
        .get(app.services.code_products.ObterTodos);
    app.route('/Code_products/:code_product_id')
        .get(app.services.code_products.ObterPorId);
}