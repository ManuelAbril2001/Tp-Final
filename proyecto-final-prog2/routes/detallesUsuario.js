var express = require('express');
var router = express.Router();

 //GET home page. */
const controller = require('../controllers/reseniaController')

router.get('/:id', controller.detallesUsuario);

module.exports = router;