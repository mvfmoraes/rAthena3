module.exports = app => {
    app.route('/Staff')
        .get(app.services.staff.ObterTodos);
    app.route('/Staff/:				staff_id')
        .get(app.services.staff.ObterPorId);
}