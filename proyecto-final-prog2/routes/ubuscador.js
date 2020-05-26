var express = require('express');
var router = express.Router();


//Controller
const controller = require('../controllers/ubuscadorController')

//Rutas

//localhost:3000/resultados
router.get('/', controller.vista)


module.exports = router;