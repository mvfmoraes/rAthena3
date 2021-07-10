module.exports = app => {
    app.route('/Departments')
        .get(app.services.departments.ObterTodos);
    app.route('/Departments/:dept_no')
        .get(app.services.departments.ObterPorId);
}