module.exports = app => {
    app.route('/Film_text')
        .get(app.services.film_text.ObterTodos);
    app.route('/Film_text/:		film_id')
        .get(app.services.film_text.ObterPorId);
}