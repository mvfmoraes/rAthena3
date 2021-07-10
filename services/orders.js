module.exports = app => {

    const { Sucesso, Falha, Finalizar, FalhaCatch } = app.helpers.results;

    const ObterTodos = async (req, res, next) => {
        try {
            const resposta = await app.db('orders')
                .select()
                .then(orders => Sucesso(orders))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }


    const ObterPorId = async (req, res, next) => {
        const { 	order_id } = req.params;
        try {
            const resposta = await app.db('orders')
                .select()
                .where({ 	order_id })
                .then(orders => Sucesso(orders))
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