var express = require('express');
var router = express.Router();

 //GET home page. */
const controller = require('../controllers/reseniaController')

router.get('/', controller.index);

module.exports = router;