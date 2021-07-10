module.exports = app => {
    app.route('/Inventory')
        .get(app.services.inventory.ObterTodos);
    app.route('/Inventory/:		inventory_id')
        .get(app.services.inventory.ObterPorId);
}