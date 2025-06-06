const InscricaoService = require('../services/InscricaoService')

const InscricaoController = {
    // TODO pegar usuario a partir do JWT

    async inscrever(req, res) {
        try {
            const usuarioId = req.user.id;
            const cursoId = req.params.idCurso;

            await InscricaoService.inscrever(usuarioId, cursoId);
            res.status(201).json({mensagem: "Inscricao realizada com sucesso"});

        } catch (error) {
            res.status(500).json({mensagem: error.message});
        }
    },

    async cancelar(req, res) {
        try {
            const usuarioId = req.user.id;
            const cursoId = req.params.idCurso;

            await InscricaoService.cancelar(usuarioId, cursoId);
            res.status().json({mensagem: "Inscricao cancelada com sucesso."})
        } catch (error) {
            res.status(500).json({mensagem: error})
        }

    }
}

module.exports = InscricaoController;