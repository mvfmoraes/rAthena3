module.exports = app => {

    const { Sucesso, Falha, Finalizar, FalhaCatch } = app.helpers.results;

    const ObterTodos = async (req, res, next) => {
        try {
            const resposta = await app.db('orderdetails')
                .select()
                .then(orderdetails => Sucesso(orderdetails))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }


    const ObterPorId = async (req, res, next) => {
        const { 	orderNumber } = req.params;
        try {
            const resposta = await app.db('orderdetails')
                .select()
                .where({ 	orderNumber })
                .then(orderdetails => Sucesso(orderdetails))
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