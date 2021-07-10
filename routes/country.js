module.exports = app => {
    app.route('/Country')
        .get(app.services.country.ObterTodos);
    app.route('/Country/:country_id')
        .get(app.services.country.ObterPorId);
}