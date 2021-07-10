module.exports = app => {
    app.route('/Territories')
        .get(app.services.territories.ObterTodos);
    app.route('/Territories/:				TerritoryID')
        .get(app.services.territories.ObterPorId);
}