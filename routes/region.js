module.exports = app => {
    app.route('/Region')
        .get(app.services.region.ObterTodos);
    app.route('/Region/:				RegionID')
        .get(app.services.region.ObterPorId);
}