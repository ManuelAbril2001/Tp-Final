var express = require('express');
var router = express.Router();


//Controller
const controller = require('../controllers/resultadosController')

//Rutas

//localhost:3000/resultados
router.get('/', controller.index)

//localhost:3000/resultados/pelicula/:id
router.get('/pelicula/:id', controller.pelicula)








module.exports = router;