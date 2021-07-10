module.exports = app => {
    app.route('/Language')
        .get(app.services.language.ObterTodos);
    app.route('/Language/:		language_id')
        .get(app.services.language.ObterPorId);
}