module.exports = app => {
    app.route('/Titles')
        .get(app.services.titles.ObterTodos);
    app.route('/Titles/:					emp_no')
        .get(app.services.titles.ObterPorId);
}