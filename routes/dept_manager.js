module.exports = app => {
    app.route('/Dept_manager')
        .get(app.services.dept_manager.ObterTodos);
    app.route('/Dept_manager/:	dept_no')
        .get(app.services.dept_manager.ObterPorId);
}