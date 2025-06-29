const express = require ('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = express.Router();

router.post('/', UsuarioController.cadastrar);
router.get('/listar',  UsuarioController.listar);

module.exports = router;