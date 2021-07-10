module.exports = app => {
    app.route('/Categories')
        .get(app.services.categories.ObterTodos);
    app.route('/Categories/:CategoryID')
        .get(app.services.categories.ObterPorId);
}