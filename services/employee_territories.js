module.exports = app => {

    const { Sucesso, Falha, Finalizar, FalhaCatch } = app.helpers.results;

    const ObterTodos = async (req, res, next) => {
        try {
            const resposta = await app.db('employee_territories')
                .select()
                .then(employee_territories => Sucesso(employee_territories))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }


    const ObterPorId = async (req, res, next) => {
        const { EmployeeID } = req.params;
        try {
            const resposta = await app.db('employee_territories')
                .select()
                .where({ EmployeeID })
                .then(employee_territories => Sucesso(employee_territories))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    return {
        ObterTodos,
        ObterPorId
    }
}