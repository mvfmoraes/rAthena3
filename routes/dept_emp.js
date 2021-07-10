module.exports = app => {
    app.route('/Dept_emp')
        .get(app.services.dept_emp.ObterTodos);
    app.route('/Dept_emp/:	emp_no')
        .get(app.services.dept_emp.ObterPorId);
}