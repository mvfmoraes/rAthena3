module.exports = app => {
    app.route('/Film_actor')
        .get(app.services.film_actor.ObterTodos);
    app.route('/Film_actor/:		actor_id')
        .get(app.services.film_actor.ObterPorId);
}