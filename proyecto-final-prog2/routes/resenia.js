var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/reseniaController')

router.get('/:id', controller.index);
router.post('/crear/:idPelicula', controller.crear)
router.get('/editar/:id', controller.editar);

// Actualizar resenia

router.post('/editar/:id', controller.actualizar);

// Borrar resenia
router.get('/borrar/:id', controller.borrarResenia);

router.post('/borrar/:id', controller.borrar);


module.exports = router;
