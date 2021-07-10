module.exports = app => {
    app.route('/Category')
        .get(app.services.category.ObterTodos);
    app.route('/Category/:category_id')
        .get(app.services.category.ObterPorId);
}