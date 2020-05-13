var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/peliculasPreferidasController')

router.get('/', controller.index);
router.get('/pelicula', controller.pelicula)








module.exports = router;