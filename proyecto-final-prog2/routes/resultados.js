var express = require('express');
var router = express.Router();


//Controller
const controller = require('../controllers/resultadosController')

//Rutas

//localhost:3000/resultados
router.get('/', controller.index)
router.get('/usuarios', controller.resultados)








module.exports = router;