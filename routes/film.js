module.exports = app => {
    app.route('/Film')
        .get(app.services.film.ObterTodos);
    app.route('/Film/:	film_id')
        .get(app.services.film.ObterPorId);
}