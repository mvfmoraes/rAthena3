module.exports = app => {
    app.route('/Address')
        .get(app.services.address.ObterTodos);
    app.route('/Address/:address_id')
        .get(app.services.address.ObterPorId);
}