module.exports = app => {
    app.route('/Offices')
        .get(app.services.offices.ObterTodos);
    app.route('/Offices/:		officeCode')
        .get(app.services.offices.ObterPorId);
}