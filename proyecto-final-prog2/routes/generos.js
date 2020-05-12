var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/generosController')

router.get('/', controller.index);
router.get('/peliculasPorGenero', controller.peliculasPorGenero)







module.exports = router;