module.exports = app => {
    app.route('/Employee_territories')
        .get(app.services.employee_territories.ObterTodos);
    app.route('/Employee_territories/:	EmployeeID')
        .get(app.services.employee_territories.ObterPorId);
}