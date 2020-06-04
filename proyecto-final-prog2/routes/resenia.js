var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/reseniaController')

router.get('/:id', controller.index);
router.post('/crear/:idPelicula', controller.crear)

// Editar resenia

router.post('/resenia/:id', controller.editar); 

// Actualizar resenia

router.post('/resenia/:id', controller.actualizar); 

// Borrar resenia

router.get('/resenia/:id', controller.borrar);

module.exports = router;
