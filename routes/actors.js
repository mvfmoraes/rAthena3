module.exports = app => {
    app.route('/Actors')
        .get(app.services.actors.ObterTodos);
    app.route('/Actors/:actor_id')
        .get(app.services.actors.ObterPorId);
}