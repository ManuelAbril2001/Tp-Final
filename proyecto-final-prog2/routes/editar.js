var express = require('express');
var router = express.Router();

//Controller
const controller = require('../controllers/reseniaController')

router.get('/', controller.index);
router.post('/editar/:id', reseniaController.editar);


module.exports = router;