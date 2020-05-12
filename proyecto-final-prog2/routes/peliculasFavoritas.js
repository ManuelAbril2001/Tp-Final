var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/peliculasFavoritasController')

router.get('/', controller.index);
router.get('/pelicula', controller.pelicula)








module.exports = router;