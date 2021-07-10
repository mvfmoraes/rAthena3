module.exports = app => {
    app.route('/Store')
        .get(app.services.store.ObterTodos);
    app.route('/Store/:				store_id')
        .get(app.services.store.ObterPorId);
}