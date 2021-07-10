module.exports = app => {

    const { Sucesso, Falha, Finalizar, FalhaCatch } = app.helpers.results;

    const ObterTodos = async (req, res, next) => {
        try {
            const resposta = await app.db('suppliers')
                .select()
                .then(suppliers => Sucesso(suppliers))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }


    const ObterPorId = async (req, res, next) => {
        const { 		SupplierID } = req.params;
        try {
            const resposta = await app.db('suppliers')
                .select()
                .where({ 		SupplierID })
                .then(suppliers => Sucesso(suppliers))
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