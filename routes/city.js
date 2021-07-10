module.exports = app => {
    app.route('/City')
        .get(app.services.city.ObterTodos);
    app.route('/City/:city_id')
        .get(app.services.city.ObterPorId);
}