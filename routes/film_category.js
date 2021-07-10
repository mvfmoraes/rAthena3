module.exports = app => {
    app.route('/Film_category')
        .get(app.services.film_category.ObterTodos);
    app.route('/Film_category/:		film_id')
        .get(app.services.film_category.ObterPorId);
}