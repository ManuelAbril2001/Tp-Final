var express = require('express');
var router = express.Router();

/* GET home page. */
const controller = require('../controllers/peliculasController')

router.get('/', controller.index);



// Editar resenia

//router.post('/editar/:id', reseniaController.editar); 

// Actualizar resenia

//router.post('/editar/:id', reseniaController.actualizar); 

// Borrar resenia

//router.post('/borrar/:id', peliculasController.borrar);




module.exports = router;
