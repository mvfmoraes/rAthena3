module.exports = app => {
    app.route('/Product_lines')
        .get(app.services.product_lines.ObterTodos);
    app.route('/Product_lines/:				productLine')
        .get(app.services.product_lines.ObterPorId);
}