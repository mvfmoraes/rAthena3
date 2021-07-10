module.exports = app => {
    app.route('/Rental')
        .get(app.services.rental.ObterTodos);
    app.route('/Rental/:				rental_id')
        .get(app.services.rental.ObterPorId);
}