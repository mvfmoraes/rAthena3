module.exports = app => {

    const { Sucesso, Falha, Finalizar, FalhaCatch } = app.helpers.results;

    const ObterTodos = async (req, res, next) => {
        try {
            const resposta = await app.db('territories')
                .select()
                .then(territories => Sucesso(territories))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }


    const ObterPorId = async (req, res, next) => {
        const { 		TerritoryID } = req.params;
        try {
            const resposta = await app.db('territories')
                .select()
                .where({ 		TerritoryID })
                .then(territories => Sucesso(territories))
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